// Handle the authentication logic on the server side
import { NextResponse, NextRequest } from 'next/server';
import { signIn } from '@/auth';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { username, password, type } = data;

  try {
    const result =
      type === 'credentials'
        ? await signIn('credentials', { redirect: false, username, password })
        : null;

    if (!result || result.error) {
      return NextResponse.json({ error: 'Invalid credentials' });
    } else {
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error('Error during sign-in', error);
    return NextResponse.error();
  }
}
