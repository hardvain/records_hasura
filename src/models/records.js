import prisma from '../../prisma/prisma-client';

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

export const getAll = async ({ take = 20, skip = 0 } = {}) => {
  const takeInt = parseInt(take);
  const skipInt = parseInt(skip);
  const count = await prisma.record.count();
  const nextSkip = skipInt + takeInt;
  const prevSkip = skipInt - takeInt;
  const tasks = await prisma.record.findMany({
    take: takeInt,
    skip: skipInt,
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
