import prisma from '../../prisma/prisma-client';
import moment from 'moment';
export const create = async (record) => {
  console.log(record);
  return await prisma.record.create({
    data: { ...JSON.parse(record) },
  });
};

export const get = async (id) => {
  return await prisma.record.findOne({
    where: { id },
  });
};

export const update = async (record) => {
  return await prisma.record.update({
    where: { id: record.id },
    data: record,
  });
};

export const getAll = async (params = {}) => {
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
