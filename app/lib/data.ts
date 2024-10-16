import prisma from '@/app/lib/prisma';

// fetch an agent data with its id
export async function fetchAgent(agentId: string) {
	const result = await prisma.agent.findUnique({
		where: {
			id: agentId,
		},
		include: {
			address: true,
			services: true,
			specializations: true,
		},
	});

	return result;
}