// Run the code: npx ts-node database.ts 

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedClients() {
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