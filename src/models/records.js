import prisma from '../../prisma/prisma-client';
import moment from 'moment'
export const create = async (record) => {
  return await prisma.record.create({
    data: {
      recordType: record.recordType,
      timestamp: record.timestamp,
      dueDate: record.dueDate,
      data: record.data,
      priority: record.priority,
      tags: {
        connect: record.tags ? record.tags.map((id) => ({ id })) : [],
      },
    },
  });
};

export const get = async (id) => {
  return await prisma.record.findOne({
    where: { id },
  });
};

export const getAll = async (params = {}) => {
  const takeInt = parseInt(params.take);
  const skipInt = parseInt(params.skip);
  const count = await prisma.record.count();
  const nextSkip = skipInt + takeInt;
  const prevSkip = skipInt - takeInt;
  let criteria = {}
  if(takeInt){
    criteria.take = takeInt
  }
  if(skipInt){
    criteria.skip = skipInt
  }
  const tasks = await prisma.record.findMany({
    ...criteria,
    where:{
      timestamp:{
        gte: moment().startOf('day').toISOString(),
        lte: moment().endOf('day').toISOString()
      }
    }
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
