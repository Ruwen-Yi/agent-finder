import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import type { NextAuthConfig, Session, User } from 'next-auth';
import type { UserType, UserResponseType } from '@/types/user';
import { AdapterUser } from 'next-auth/adapters';
import { CredentialsType } from '@/types/login';
import { JWT } from 'next-auth/jwt';

// Ensures custom user properties are recognized throughout the NextAuth configuration.
declare module 'next-auth' {
  interface User extends UserType {}
}

declare module 'next-auth/adapters' {
  interface AdapterUser extends UserType {}
}

declare module 'next-auth/jwt' {
  interface JWT extends UserType {}
}
