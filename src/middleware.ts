import { NextRequest, NextResponse } from "next/server";
// import { Ratelimit } from "@upstash/ratelimit";
// import { kv } from "@vercel/kv";

// const ratelimit = new Ratelimit({
//   redis: kv,
//   limiter: Ratelimit.slidingWindow(5, "60 s"),
// });

export const config = {
  matcher: "/api/send",
};

export default async function middleware(request: NextRequest) {
  try {
    // const ip = request.ip ?? "127.0.0.1";
    // const { success } = await ratelimit.limit(ip);
    // return success
    //   ? NextResponse.next()
    //   : NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });

    return NextResponse.next();
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
