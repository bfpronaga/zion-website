import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Set CSP headers to allow YouTube embeds
  response.headers.set(
    'Content-Security-Policy',
    "frame-src 'self' https://www.youtube.com https://youtube.com; img-src 'self' data: https: blob:;"
  );
  
  return response;
}

export const config = {
  matcher: '/:path*',
};
