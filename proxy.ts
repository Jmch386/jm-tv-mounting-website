import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the temporary closed homepage to load normally
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Send every other page back to the homepage
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
