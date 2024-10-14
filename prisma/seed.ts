// Run the code: npx ts-node database.ts 

import { PrismaClient } from '@prisma/client'

import {
    agents,
    clients,
    specializations,
    services,
    comments,
  } from '@/app/lib/placeholder-data'

const prisma = new PrismaClient();

async function seedClients() {
  const newClientCount = await prisma.client.createMany({
    data: clients.map(client=>({
        id:client.id,
        name:client.name,
        email:client.email
    })),
    skipDuplicates: true
  })

  console.log(`${newClientCount.count} client data is created!`)
}

async function seedAgents() {
}

async function main() {
  await seedClients();
  await seedAgents();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })