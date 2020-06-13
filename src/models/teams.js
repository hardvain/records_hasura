import moment from 'moment';
import prisma from '../../prisma/prisma-client';

export const create = async (team) => {
  return await prisma.team.create({
    data: JSON.parse(team),
  });
};

export const get = async (id) => {
  return await prisma.team.findOne({
    where: { id },
    include: { records: true },
  });
};
const queries = {};
const raw = async (key) => await prisma.raw(queries[key]);

export const update = async (id, team) => {
  return await prisma.team.update({
    where: { id },
    data: team,
  });
};

export const del = async (id) => {
  return await prisma.team.delete({
    where: { id },
  });
};

export const getAll = async (params = {}) => {
  const teams = await prisma.team.findMany({ include: { records: true } });
  return {
    count: teams.length,
    items: teams,
  };
};
