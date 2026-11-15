import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Set CSP headers to allow YouTube embeds
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https: blob: https://img.youtube.com https://i.ytimg.com;
    font-src 'self' data:;
    connect-src 'self';
    frame-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com;
    media-src 'self';
  `.replace(/\s{2,}/g, ' ').trim();
  
  response.headers.set('Content-Security-Policy', cspHeader);
  
  return response;
}

export const config = {
  matcher: '/:path*',
};
