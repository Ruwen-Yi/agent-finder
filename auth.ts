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
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      // Add the user properties to the token after signing in
      if (user) {
        token.id = user.id as string;
        token.avatar = user.avatar;
        token.name = user.name;
        token.email = user.email;
        token.premiumSubscription = user.premiumSubscription;
        token.accessToken = user.accessToken;
        token.subId = user.subId;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    
    async session({ session, token }: { session: Session; token: JWT }) {
      // Create a user object with token properties
      const userObject: AdapterUser = {
        id: token.id,
        avatar: token.avatar,
        name: token.name,
        premiumSubscription: token.premiumSubscription,
        accessToken: token.accessToken,
        subId: token.subId,
        refreshToken: token.refreshToken,
        email: token.email ? token.email : '', // Ensure email is not undefined
        emailVerified: null, // Required property, set to null if not used
      };
      // Add the user object to the session
      session.user = userObject;
      return session;
    },
  },
  // Custom authentication-related pages
  pages: {},
  // Configure session options
  session: {},
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
