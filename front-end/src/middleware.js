// middleware.js
import { NextResponse } from "next/server";

const protectedRoutes = ["/success", "/dashboard"];

export function middleware(request) {
  console.log("hIIIIIIIIIIIIIIII");
  const accessToken = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !accessToken) {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/success/:path*"],
};
