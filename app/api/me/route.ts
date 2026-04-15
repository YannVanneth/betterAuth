import { getServerSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json({
    message: "Hello, authenticated user!",
    payload: session,
  });
}
