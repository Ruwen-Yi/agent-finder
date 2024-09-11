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

const userExample = {
  id: 'id-333',
  name: 'user-name',
  email: 'email@connect.com',
  avatar: 'avatar',
  premiumSubscription: false,
  accessToken: 'actkl333',
  refreshToken: 'reftkl333',
  subId: 'sub-333',
};
const authOptions = {
  // Authentication providers list
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      authorize: async (credentials) => {
        return new Promise((res) => {
          res(userExample);
        });
      },
    }),
  ],
  // Custom authentication callbacks
  callbacks: {},
  // Custom authentication-related pages
  pages: {},
  // Configure session options
  session: {},
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
