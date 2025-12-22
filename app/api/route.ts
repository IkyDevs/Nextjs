import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: 200, message: "Hello from Next.js!" });
}
export async function POST() {
  return NextResponse.json({ status: 200, message: "Hello from Next.js!" });
}
