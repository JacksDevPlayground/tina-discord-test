// route handler enabling draft mode
import { draftMode } from "next/headers";
import { isUserAuthorized } from "@tinacms/auth";
import { NextRequest, NextResponse } from "next/server";

// `/api/preview/enter?token=${token.id_token}&slug=` + location

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  const token = request.nextUrl.searchParams.get("token");

  console.log("HITTING /api/preview/enter", slug, token);

  if (!slug || !token) {
    return new Response("Invalid request", { status: 400 });
  }

  const redirectUrl = slug ? `${slug}` : "/";

  if (process.env.NODE_ENV === "development") {
    // Enter preview-mode in local development
    draftMode().enable();
    return NextResponse.redirect(redirectUrl);
  }

  // Check tina cloud token
  const isAuthorizedRes = await isUserAuthorized({
    token: `Bearer ${token}`,
    clientID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  });

  if (isAuthorizedRes) {
    draftMode().enable();
    return NextResponse.redirect(redirectUrl);
  }

  return Response.json({ message: "Invalid token" }, { status: 401 });
}
