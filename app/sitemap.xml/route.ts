import { getSitemapXml, getSitemapHeaders } from "../../sitemap";
import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(getSitemapXml(), { headers: getSitemapHeaders() });
}
