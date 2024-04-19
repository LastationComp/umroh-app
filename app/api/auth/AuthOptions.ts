import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const AuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 60 * 60 * 24,
    strategy: 'jwt',
  },
  callbacks: {
    jwt({ token, user, session, trigger }) {
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
  },
  providers: [
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
        const csrf = await fetch(process.env.NEXT_PUBLIC_URL_API + '/api/sanctum/csrf-cookie', {
          credentials: 'include',
        });

        const cookies = csrf.headers.getSetCookie();

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
        const res = await fetch('http://127.0.0.1:8000/api/auth', {
          method: 'POST',
          //   cache: "no-store",
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
        const user = {
          id: result.data.id,
          name: result.data.name,
          image: result.data.image,
          isEmailVerified: result.data.is_email_verified,
          isPhoneVerified: result.data.is_phone_verified,
          role: result.data.role,
          tokenApi: result.token,
        };
        return user;
      },
    }),
  ],
};
