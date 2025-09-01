import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email, password } = body || {};
  const adminEmail = process.env.ROOT_EMAIL || "admin@example.com";
  const adminPassword = process.env.ROOT_PASSWORD || "admin";
  if (email === adminEmail && password === adminPassword) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("flags_admin", "1", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      // session cookie
    });
    return res;
  }
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}

