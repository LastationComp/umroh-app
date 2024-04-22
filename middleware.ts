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
  const token = await getToken({ req: req, cookieName: process.env.NEXT_PUBLIC_COOKIES, secret: process.env.NEXTAUTH_SECRET, secureCookie: true });

  if (token) {
    if (pathname.startsWith('/verify/email')) {
      if (token.isEmailVerified) return redirect('/');
    } else {
      if (!token.isEmailVerified) return redirect('/verify/email');
    }

    if (pathname.startsWith('/verify/reset-password')) return redirect('/');

    if (pathname === '/masuk') return redirect('/');

    if (pathname === '/daftar') return redirect('/');

    // if (pathname.startsWith('/verify') && token?.isEmailVerified) return redirect('/');
  }

  if (!token) {
    if (pathname.startsWith('/profile')) return redirect('/');
    if (pathname.startsWith('/verify/email')) return redirect('/');
  }

  return NextResponse.next();
  // if (token) {
  //   if (pathname === '/' && !token.isEmailVerified) return redirect('/verify/email');

  //   if (pathname.startsWith('/verify') && token?.isEmailVerified) return redirect('/');

  //   if (pathname === '/') return NextResponse.next();

  //   if (pathname.startsWith('/profile')) return NextResponse.next();
  // } else {
  //   if (pathname === '/') return NextResponse.next();

  //   return redirect('/');
  // }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
