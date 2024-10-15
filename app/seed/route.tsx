import seedData from '@/prisma/seed';

export async function GET() {
  return Response.json({ data: await seedData() });
}
