import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      tokenApi: string;
      travel: {
        id?: string;
        role?: "manager" | 'staff';
        settings: any;
      };
      name: string;
      image: string;
      isEmailVerified: boolean;
      isPhoneVerified: boolean;
      role: "admin" | "travel" | "staff" | "subscriber";
      state: number;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    idToken?: string;
    travel: {
      id?: string;
      role?: "manager" | 'staff';
      settings: any;
    };
    tokenApi: string;
    image: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    role: "admin" | "travel" | "staff" | "subscriber";
    name: string;
    state: number;
    expires_token: Date;
  }

  interface Profile {
    email_verified: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id: string;
    idToken?: string;
    tokenApi: string;
    travel: {
      id?: string;
      role?: "manager" | 'staff';
      settings: any;
    };
    image: string;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    role: "admin" | "travel" | "staff" | "subscriber";
    name: string;
    state: number;
    expires_token: Date;
  }
}
