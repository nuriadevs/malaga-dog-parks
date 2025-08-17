import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

/**
 * Middleware function to handle internationalization
 * @param {NextRequest} request - The incoming request object
 * @returns {Response} - The response object with applied internationalization
 */
export default function middleware(request: NextRequest) {

  const response = intlMiddleware(request);
  
  
  return response;
}

export const config = {
  matcher: [
    '/',
    '/(es|en|de|fr)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)' 
  ]
};