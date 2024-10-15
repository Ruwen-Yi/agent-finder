// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
// Instantiate a single instance `PrismaClient` and save it on the `globalThis` object.
// Then we keep a check to only instantiate `PrismaClient` if it's not on the `globalThis` object 
// otherwise, use the same instance again if already present to prevent instantiating extra `PrismaClient` instances.

import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// Due to the hot reload feature in development environment in Next.js
//   where db connection is created each time running 'next dev',
//     which can quickly exhaust the database connections, 
//       as each `PrismaClient` instance holds its own connection pool.
// Use the same `PrismaClient` instance if not in production environment.
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
