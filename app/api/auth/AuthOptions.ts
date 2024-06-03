import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const getLaravelCsrf = async () => {
  const csrf = await fetch(process.env.NEXT_PUBLIC_URL_API + '/api/sanctum/csrf-cookie', {
    credentials: 'include',
  });

  const cookies = csrf.headers;
  // console.log(cookies.get('Set-Cookie'))
  let sessionKey;
  let xsrfToken;
  cookies.forEach((cookie: string) => {
    if (cookie.startsWith('XSRF-TOKEN=')) {
      xsrfToken = cookie.split('=')[1];
    }
    if (cookie.startsWith('laravel_session=')) {
      sessionKey = cookie.split('=')[1];
    }
  });

  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (sessionKey) {
    headers.append('laravel_session', sessionKey);
  }

  if (xsrfToken) {
    headers.append('X-XSRF-TOKEN', xsrfToken);
  }
  return headers;
};
export const AuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 60 * 60 * 24,
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, session, trigger, account, profile }) {
      if (account?.provider === 'google' && !token.tokenApi) {
        const headers = await getLaravelCsrf();
        const res = await fetch(process.env.NEXT_PUBLIC_URL_API + '/api/oauth/google', {
          method: 'POST',
          cache: 'no-store',
          credentials: 'include',
          headers: headers,
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            image: user.image,
            is_email_verified: profile?.email_verified ?? false,
            secret_token: profile?.sub,
          }),
        });
        if (!res.ok) {
          token = token;
        }

        const result = await res.json();

        token = {
          ...token,
          ...session,
          tokenApi: result.token,
          isEmailVerified: result?.data?.is_email_verified ?? false,
          isPhoneVerified: result?.data?.is_phone_verified,
          ...result.data,
          travel: {},
          expires_token: result?.expires_at,
        };

        user = result.data;

        if (token.role === 'travel') {
          token = {
            ...token,
            travel: result.travel,
          };
        }
      }

      if (trigger === 'update') {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token = {
          ...token,
          ...session,
        };
      }
      return {
        ...session,
        ...token,
        ...user,
      };
    },
    session({ session, token }) {
      session.user = token;
      return session;
    },
    async signIn({ account, profile }) {
      // if (account) {
      //   if (account.provider === 'google') {
      //     if (profile) {
      //       return profile.email_verified;
      //     }
      //   }
      // }

      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Input your email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials, req) {
        const headers = await getLaravelCsrf();
        const res = await fetch(process.env.NEXT_PUBLIC_URL_API + '/api/auth', {
          method: 'POST',
          cache: 'no-store',
          credentials: 'include',
          headers: headers,
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        // console.log(await res.json());
        if (!res.ok && res.status !== 200) return null;

        const result = await res.json();
        let user = {
          id: result.data.id,
          name: result.data.name,
          image: result.data.image,
          isEmailVerified: result.data.is_email_verified,
          isPhoneVerified: result.data.is_phone_verified,
          role: result.data.role,
          tokenApi: result.token,
          state: result.data.state,
          expires_token: result.expires_at,
          travel: {},
        };

        if (user.role === 'travel') {
          user = {
            ...user,
            travel: {
              ...result.travel,
            },
            
          };
        }

        return user;
      },
    }),
  ],
};
