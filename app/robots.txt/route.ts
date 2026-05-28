import { getRobotsTxt, getRobotsHeaders } from "../../robots";
import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(getRobotsTxt(), { headers: getRobotsHeaders() });
}
