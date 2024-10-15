// Run the code by accessing http://localhost:3000/seed
import prisma from '@/app/lib/prisma';
import {
  agents,
  clients,
  specializations,
  services,
  comments,
} from '@/app/lib/placeholder-data';

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

export default async function seedData() {
  try {
    await seedClients();
    await seedAgents();
    await seedComments();

    await prisma.$disconnect();
    return 'You successfully seeded the database!';
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    return 'Something went wrong when seeding the database!';
  }
}
