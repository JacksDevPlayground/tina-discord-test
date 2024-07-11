import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  console.log("HITTING /api/preview/exit", slug);

  draftMode().disable();
  // Construct the URL for redirection
  const redirectUrl = slug ? `/${slug}` : "/";
  return NextResponse.redirect(redirectUrl);
}
