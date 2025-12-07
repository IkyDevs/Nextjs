import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const isLogin = true;
  if (!isLogin) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
export const config = {
  matcher: ['/dashboard/:path*', '/product/:path*', '/about/:path*'],
}
