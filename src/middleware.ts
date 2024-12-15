import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookiesValues } from './config/constant';

const redirectTo = (req: NextRequest, path: string) => NextResponse.redirect(new URL(path, req.url));

const isLoginPath = (pathname: string) => ['/login', '/sign', '/verification', '/forgetPassword', '/signup'].includes(pathname);

const isTokenExpired = (token: string | undefined): boolean => {
  if (!token) return true;
  try {
    const decoded: any = jwt.decode(token);
    if (!decoded || !decoded.exp) return true;
    const expirationDate = decoded.exp * 1000;
    return expirationDate < Date.now();
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get(cookiesValues.GlobalToken)?.value;
  const pathname = req.nextUrl.pathname;

  if (pathname === '/') {
    if (token && !isTokenExpired(token)) {
      return redirectTo(req, '/dashboard');
    } else {
      return redirectTo(req, '/login');
    }
  }

  if (token && !isTokenExpired(token) && isLoginPath(pathname)) {
    return redirectTo(req, '/');
  }

  if (!token || isTokenExpired(token)) {
    return redirectTo(req, '/login');
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|SFArabic.ttf|favicon.ico|assets|images/).*)'
  ],
};
