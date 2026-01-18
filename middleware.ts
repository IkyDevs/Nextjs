import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.redirect("/");
  }
}
