import { SessionProvider } from 'next-auth/react';
import AgentProfile from '@/app/ui/(dashboard)/agent-profile';
import { auth } from '@/auth';

export default async function Dashboard() {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <AgentProfile />
    </SessionProvider>
  );
}
