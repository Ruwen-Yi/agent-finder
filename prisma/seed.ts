// Run the code: npx ts-node database.ts

import { PrismaClient } from '@prisma/client';

import {
  agents,
  clients,
  specializations,
  services,
  comments,
} from '@/app/lib/placeholder-data';

const prisma = new PrismaClient();

async function seedClients() {
  const newClientsCount = await prisma.client.createMany({
    data: clients,
    skipDuplicates: true,
  });

  console.log(`${newClientsCount.count} client data is created!`);
}

async function seedAgents() {
  const newAgentsCount = await prisma.agent.createMany({
    data: agents.map((agent,index) => ({
      ...agent,
      address: {
        create: {...agent.address},
      },
      services: {
        create: [...services.slice(0, (index % 5) + 1)]
      },
      specializations: {
        create: [...specializations.slice(0, (index % 5) + 1)]
      }
    })),
    skipDuplicates: true,
  });

  console.log(`${newAgentsCount.count} agents data is created!`);
}

async function seedComments() {
  const newCommentsCount = await prisma.comment.createMany({
    data:comments
  })

  console.log(`${newCommentsCount.count} comments data is created!`);
}

async function main() {
  await seedClients();
  await seedAgents();
  await seedComments();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
