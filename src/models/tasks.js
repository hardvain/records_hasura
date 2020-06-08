import prisma from '../../prisma/prisma-client';


export const create = async (data) => {
  const createdTask = await prisma.question.create({
    data: {
      name: body.name,
      description: body.description,
      dueDate: body.dueDate,
      status: body.status,
      priority: body.priority,
    },
  });
  return createdTask;
}