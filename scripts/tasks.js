const { PrismaClient } = require('@prisma/client');
const faker = require('faker');
const statuses = ['Todo', 'In Progress', 'Completed'];
const priorities = ['Very High', 'High', 'Medium', 'Low', 'Very Low'];

const prisma = new PrismaClient();

const createTasks = async () => {
  const items = [...Array(1000).keys()];
  for (let i in items) {
    const task = {
      name: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      dueDate: faker.date.between(new Date(2020, 1, 1), new Date(2020, 12, 31)),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      priority: priorities[Math.floor(Math.random() * priorities.length)],
    };
    await prisma.task.create({
      data: task,
    });
  }
  console.log("completed")
};

const createProjects = async () => {
  const items = [...Array(100).keys()];
  for (let i in items) {
    const item = {
      name: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
    };
    await prisma.project.create({
      data: item,
    });
  }
  console.log("completed")
};

const createInitiatives = async () => {
  const items = [...Array(100).keys()];
  for (let i in items) {
    const item = {
      name: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
    };
    await prisma.initiative.create({
      data: item,
    });
  }
  console.log("completed")
};

const createBloodGlucose = async () => {
  const items = [...Array(40000).keys()];
  for (let i in items) {
    const item = {
      value: Math.floor(Math.random() * 220) + 70,
      decription: faker.lorem.sentence(),
      timestamp:faker.date.between(new Date(2020, 1, 1), new Date(2020, 12, 31)),
    };
    await prisma.bloodGlucose.create({
      data: item,
    });
  }
  console.log("completed")
};


const createWaterConsumption = async () => {
  const items = [...Array(3000).keys()];
  for (let i in items) {
    const item = {
      value: Math.floor(Math.random() * 220) + 70,
      decription: faker.lorem.sentence(),
      timestamp:faker.date.between(new Date(2020, 1, 1), new Date(2020, 12, 31)),
    };
    await prisma.waterConsumption.create({
      data: item,
    });
  }
  console.log("completed")
};

createBloodGlucose().then(() => {});
