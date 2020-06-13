import moment from 'moment';
import prisma from '../../prisma/prisma-client';
import { raw } from "@prisma/client"

export const create = async (record) => {
  return await prisma.record.create({
    data: { ...JSON.parse(record) },
  });
};

export const get = async (id) => {
  return await prisma.record.findOne({
    where: { id },
  });
};

export const update = async (id, record) => {
  if (record.teams && record.teams.length > 0) {
    record.teams = {
      connect: record.teams.map((t) => ({ id: t.id })),
    };
  }
  if (record.projects && record.projects.length > 0) {
    record.projects = {
      connect: record.projects.map((t) => ({ id: t.id })),
    };
  }
  return await prisma.record.update({
    where: { id },
    data: record,
  });
};

export const del = async (id) => {
  return await prisma.record.delete({
    where: { id },
  });
};
const constructWhere = ({
  recordType,
  date,
  take,
  skip,
  orderBy,
  orderDirection,
  team,
  project,
  search,
}) => {
  const orderByField = orderBy || 'timestamp';
  let query = { where: {}, orderBy: {} };
  if (recordType) {
    query.where.recordType = { equals: recordType };
  }
  if (date && date !== 'undefined') {
    query.where.timestamp = {
      gte: moment(date).startOf('day').toISOString(),
      lte: moment(date).endOf('day').toISOString(),
    };
  }
  const takeInt = parseInt(take);
  const skipInt = parseInt(skip);
  if (takeInt) {
    query.take = takeInt;
  }
  if (skipInt) {
    query.skip = skipInt;
  }
  query.orderBy = {
    [orderByField]: orderDirection || 'desc',
  };
  if (team && team !== 'undefined' && team !== 'all') {
    query.where.teams = { some: { id: team } };
  }
  if (project && project !== 'undefined' && project !== 'all') {
    query.where.projects = { some: { id: project } };
  }

  query.include = {
    teams: true,
    projects: true,
    tags: true,
  };
  return query;
};
export const getAll = async (params = {}) => {
  const criterium = constructWhere(params);
  const tasks = await prisma.record.findMany(criterium);
  return {
    count: tasks.length,
    items: tasks,
  };
};


export const search = async ({search} = {}) => {
  const tasks = await prisma.queryRaw(`Select * from "Record" where data ->> 'value' like '%${search}%'`);
  return {
    count: tasks.length,
    items: tasks,
  };
};

export const getForCalendar = async (params = {}) => {
  const takeInt = parseInt(params.take);
  const skipInt = parseInt(params.skip);
  const date = params.date;
  const count = await prisma.record.count();
  const nextSkip = skipInt + takeInt;
  const prevSkip = skipInt - takeInt;
  let criteria = {};
  if (takeInt) {
    criteria.take = takeInt;
  }
  if (skipInt) {
    criteria.skip = skipInt;
  }
  const tasks = await prisma.record.findMany({
    ...criteria,
    where: date
      ? {
          timestamp: {
            gte: moment(date).startOf('day').toISOString(),
            lte: moment(date).endOf('day').toISOString(),
          },
        }
      : {},
    orderBy: {
      timestamp: 'desc',
    },
  });
  let response = {
    count,
    items: tasks,
  };
  if (nextSkip <= count) {
    response['next'] = {
      take,
      skip: nextSkip,
    };
  }
  if (prevSkip > 0) {
    response['prev'] = {
      take,
      skip: prevSkip,
    };
  }
  return response;
};
