import { NextRequest, NextResponse } from 'next/server';
import { cookiesValues } from './config/constant';
import Router from 'next/router';

// دالة لإعادة التوجيه
const redirectTo = (req: NextRequest, path: string) => NextResponse.redirect(new URL(path, req.url));

const isLoginPath = (pathname: string) => ['/login', '/sign', '/verification', '/forgetPassword', '/signup'].includes(pathname);

export async function middleware(req: NextRequest) {

  const token =  req.cookies.get(cookiesValues.GlobalToken)?.value;

  const pathname = req.nextUrl.pathname;
  const pathSegments = pathname.split('/');

  
  if (pathname === '/') {
    return token ? redirectTo(req, '/dashboard') : redirectTo(req, '/login');
  }

  if (token && isLoginPath(pathname)) {
    return redirectTo(req, '/');
  }

  if (!token && !isLoginPath(pathname)) {
    return redirectTo(req, '/login');
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|SFArabic.ttf|favicon.ico|assets|images/).*)'
  ],
};

