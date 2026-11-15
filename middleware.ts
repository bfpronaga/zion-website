import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Set security headers to allow YouTube embeds
  // More permissive CSP for development/demo purposes
  const cspHeader = `
    frame-src 'self' https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com;
    img-src 'self' data: https:;
  `.replace(/\s{2,}/g, ' ').trim();
  
  response.headers.set('Content-Security-Policy', cspHeader);
  
  // Ensure X-Frame-Options doesn't block embeds
  response.headers.delete('X-Frame-Options');
  
  return response;
}

export const config = {
  matcher: '/:path*',
};
