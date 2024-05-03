import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { dashboardMiddleware } from './lib/Middleware/dashboard';

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const redirect = (url: string) => {
    const newUrl = new URL(url, req.url);
    return NextResponse.redirect(newUrl);
  };

  const rewrite = (url: string) => {
    const newUrl = new URL(url, req.url);
    return NextResponse.rewrite(newUrl);
  };

  const cookieName = process.env.NODE_ENV === 'development' ? 'next-auth.session-token' : '__Secure-next-auth.session-token';
  // const callbackUrl = process.env.NODE_ENV === 'development' ? 'next-auth.callback-url' : '__Secure-next-auth.callback-url';
  // const companyUrl = '/companies/dashboard';
  // const employeeUrl = '/employee/dashboard';
  const token = await getToken({ req: req, cookieName: process.env.NEXT_PUBLIC_COOKIES, secret: process.env.NEXTAUTH_SECRET, secureCookie: true });

  if (token) {
    if (new Date(token.expires_token) < new Date()) {
      const response = NextResponse.redirect(new URL('/', req.url));
      response.cookies.delete(cookieName);
      return response;
    }

    // if (token.state === 0 && pathname.startsWith('/daftar/step')) return NextResponse.next();

    // if (token.state === 0) return redirect('/daftar/step');
    const state = Number(token.state);

    if (pathname.startsWith('/daftar/step')) {
      // console.log(token);
      if (state === 0) return NextResponse.next();
      if (state === 1) return redirect('/');
    } else {
      if (state === 0 || state === 2) return redirect('/daftar/step');
    }

    if (pathname.startsWith('/verify/email')) {
      if (token.isEmailVerified) return redirect('/');
    } else {
      if (!token.isEmailVerified) return redirect('/verify/email');
    }

    if (pathname.startsWith('/verify/reset-password')) return redirect('/');

    if (pathname === '/masuk') return redirect('/');

    if (pathname === '/daftar') return redirect('/');

    if (pathname.startsWith(`/${token.role}/dashboard`)) {
      if (token.role === 'subscriber') return redirect('/');
      if (pathname === `/${token.role}/dashboard`) return;
      if (token.role === 'admin') {
        const pattern = new RegExp('countries|cities|provinces|categories|airlines|facilities|hotels|staffs', 'g');
        if (!pattern.test(pathname)) return redirect('/');
      }
      if (token.role === 'staff') {
        const pattern = new RegExp('countries|cities|provinces|categories|airlines|facilities|hotels', 'g');
        if (!pattern.test(pathname)) return redirect('/');
      }
    }
  }

  if (!token) {
    if (pathname.startsWith('/profile')) return redirect('/');
    if (pathname.startsWith('/verify/email')) return redirect('/');
    if (pathname.startsWith('/admin')) return redirect('/');
    if (pathname.startsWith('/daftar/step')) return redirect('/');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
