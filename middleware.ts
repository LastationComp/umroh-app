import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { responseError } from './lib/Handling/response';

const redis = new Redis({
  url: process.env.UPSTASH_URL,
  token: process.env.UPSTASH_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(1, '10 s'),
});

const rateLimitMap = new Map();
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

  // const ip = req.ip ?? '127.0.0.1';
  // console.log(req.ip);
  // const { success, pending, limit, reset, remaining } = await ratelimit.limit(ip);
  // console.log(remaining);
  // if (!success)
  //   return NextResponse.json(
  //     {
  //       message: 'Too Many Request',
  //     },
  //     {
  //       status: 429,
  //     }
  //   );

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.ip || '127.0.0.1';
  const userAgent = req.headers.get('user-agent');
  const finalDevice = ip + ':' + userAgent;
  // console.log(finalDevice);
  const limit = 100; // Limiting requests to 5 per minute per IP
  const windowMs = 60 * 1000; // 1 minute
  if (process.env.APP_ENV === 'production') {
    if (!rateLimitMap.has(finalDevice)) {
      rateLimitMap.set(finalDevice, {
        count: 0,
        lastReset: Date.now(),
      });
    }

    const ipData = rateLimitMap.get(finalDevice);
    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0;
      ipData.lastReset = Date.now();
    }

    if (ipData.count >= limit) {
      return responseError('Too Many Request', 429);
    } else {
      ipData.count += 1;
    }
  }

  // const cookieName = process.env.NODE_ENV === 'development' ? 'next-auth.session-token' : '__Secure-next-auth.session-token';
  // const callbackUrl = process.env.NODE_ENV === 'development' ? 'next-auth.callback-url' : '__Secure-next-auth.callback-url';
  // const companyUrl = '/companies/dashboard';
  // const employeeUrl = '/employee/dashboard';
  const token = await getToken({
    req: req,
    cookieName: process.env.NEXT_PUBLIC_COOKIES,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: true,
  });
  if (token) {
    
    if (new Date(token.expires_token) < new Date()) {
      const response = NextResponse.redirect(new URL('/', req.url));
      response.cookies.delete(process.env.NEXT_PUBLIC_COOKIES ?? '');
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

    if (pathname.includes('dashboard')) {
      if (!pathname.startsWith(`/${token.role}/dashboard`) && token.travel.role !== "staff") return redirect(`/${token.role}/dashboard`);
      // if (token.travel.role === "staff") return redirect(`/${token.role}/${token.travel.role}/dashboard`);
    }

    if (pathname.startsWith(`/${token.role}/dashboard`)) {
      if (token.role === 'subscriber') return redirect('/');
      if (pathname === `/${token.role}/dashboard`) return;
      

      if (token.role === 'admin') {
        const pattern = new RegExp('countries|cities|provinces|categories|airlines|facilities|hotels|staffs|travel-verification', 'g');
        if (!pattern.test(pathname)) return redirect('/');
      }
      if (token.role === 'staff') {
        const pattern = new RegExp('countries|cities|provinces|categories|airlines|facilities|hotels|travel-verification', 'g');
        if (!pattern.test(pathname)) return redirect('/');
      }
      if (token.role === 'travel') {
        let pattern : RegExp = new RegExp('');
        if (token.travel.role === 'staff') 
          {
            pattern = new RegExp('packet', 'g');
            const staffCanUpdate = token.travel.settings[0].staff_can_update;
            if(!staffCanUpdate && pathname.includes('draft'))
              {
                return redirect(`/${token.role}/dashboard/packet`);
              }
          }
        if (token.travel.role === "manager")
          {
            pattern = new RegExp('packet|settings|travels/staffs', 'g');
          }
        if (!pattern.test(pathname)) return redirect('/');
        
      }
    }

    
  }

  if (!token) {
    if(pathname.includes('dashboard')) return redirect('/');
    if (pathname.startsWith('/profile')) return redirect('/');
    if (pathname.startsWith('/verify/email')) return redirect('/');
    if (pathname.startsWith('/admin')) return redirect('/');
    if (pathname.startsWith('/travel')) return redirect('/');
    if (pathname.startsWith('/daftar/step')) return redirect('/');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
