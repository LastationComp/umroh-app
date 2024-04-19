import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

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
  const token = await getToken({ req: req, cookieName: cookieName, secret: process.env.NEXTAUTH_SECRET, secureCookie: true });

  if (pathname === '/masuk' && !token) {
    return NextResponse.next();
  }

  if (pathname === '/daftar' && !token) return NextResponse.next();

  if (token) {
    if (pathname === '/' && !token.isEmailVerified) return redirect('/verify/email');

    if (pathname.startsWith('/verify') && token?.isEmailVerified) return redirect('/');

    if (pathname === '/') return NextResponse.next();

    if (pathname.startsWith('/profile')) return NextResponse.next();
  } else {
    if (pathname === '/') return NextResponse.next();

    return redirect('/');
  }
}

export const config = {
  matcher: ['/masuk', '/daftar', '/profile/:path*', '/', '/verify/:path*'],
};
