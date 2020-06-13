import moment from 'moment';
import prisma from '../../prisma/prisma-client';

export const create = async (tag) => {
  return await prisma.tag.create({
    data: JSON.parse(tag),
  });
};

export const get = async (id) => {
  return await prisma.tag.findOne({
    where: { id },
  });
};
const queries = {};
const raw = async (key) => await prisma.raw(queries[key]);

export const update = async (id, tag) => {
  return await prisma.tag.update({
    where: { id },
    data: tag,
  });
};

export const del = async (id) => {
  return await prisma.tag.delete({
    where: { id },
  });
};

export const getAll = async (params = {}) => {
  const tags = await prisma.tag.findMany({include:{records:true}});
  return {
    count: tags.length,
    items: tags,
  };
};
