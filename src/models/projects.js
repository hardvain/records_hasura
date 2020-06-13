import moment from 'moment';
import prisma from '../../prisma/prisma-client';

export const create = async (project) => {
  console.log(project);
  return await prisma.project.create({
    data: JSON.parse(project),
  });
};

export const get = async (id) => {
  return await prisma.project.findOne({
    where: { id },
  });
};
const queries = {};
const raw = async (key) => await prisma.raw(queries[key]);

export const update = async (id, project) => {
  return await prisma.project.update({
    where: { id },
    data: {
      name: project.name,
      description: project.description,
    },
  });
};

export const del = async (id) => {
  return await prisma.project.delete({
    where: { id },
  });
};

export const getAll = async (params = {}) => {
  const projects = await prisma.project.findMany({
    include: { records: true, team: true },
  });
  return {
    count: projects.length,
    items: projects,
  };
};
