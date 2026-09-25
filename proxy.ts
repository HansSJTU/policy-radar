import { NextResponse, type NextRequest } from 'next/server';
import { canonicalRedirect } from './app/canonical-host';

export function proxy(request: NextRequest) {
  const target = canonicalRedirect(request.url, request.method);
  return target ? NextResponse.redirect(target, 301) : NextResponse.next();
}
