import seedData from '@/app/lib/seed';

export async function GET() {
  return Response.json({ data: await seedData() });
}
