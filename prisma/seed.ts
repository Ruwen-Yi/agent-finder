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
  agents.map(
    async (agent, index) =>
      await prisma.agent.upsert({
        where: { id: agent.id },
        update: {},
        create: {
          ...agent,
          address: {
            create: { ...agent.address },
          },
          services: {
            create: [...services.slice(0, (index % 5) + 1)],
          },
          specializations: {
            create: [...specializations.slice(0, (index % 5) + 1)],
          },
        },
        include: {
          address: true,
          services: true,
          specializations: true,
        },
      })
  );
  //     data: agents.map((agent, index) => ({
  //       ...agent,
  //       address: {
  //         create: { ...agent.address },
  //       },
  //       services: {
  //         create: [...services.slice(0, (index % 5) + 1)],
  //       },
  //       specializations: {
  //         create: [...specializations.slice(0, (index % 5) + 1)],
  //       },
  //     })),
  //     skipDuplicates: true,
  //   });

  console.log(`${agents.length} agents data is created!`);
}

async function seedComments() {
  let newCommentCount = await prisma.comment.createMany({
    data: comments,
    skipDuplicates: true,
  });

  console.log(`${newCommentCount.count} comments data is created!`);
}

async function seedDatabase() {
  await seedClients();
  await seedAgents();
  await seedComments();
}

export function main() {
  seedDatabase()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
    });
}
