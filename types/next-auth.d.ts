import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      tokenApi: string;
      name: string;
      image: string;
      isEmailVerified: boolean;
      isPhoneVerified: boolean;
      role: 'admin' | 'travel' | 'staff' | 'subscriber';
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id: string;
    idToken?: string;
    tokenApi: string;
    image: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    role: 'admin' | 'travel' | 'staff' | 'subscriber';
    name: string;
  }
}
