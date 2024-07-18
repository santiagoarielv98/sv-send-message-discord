import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 60 seconds
  limiter: Ratelimit.slidingWindow(5, "60 s"),
});

export const config = {
  matcher: "/api/send",
};

export default async function middleware(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  return success
    ? NextResponse.next()
    : NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
}
