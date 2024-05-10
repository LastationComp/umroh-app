"use server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const url = searchParams.get("url") ?? "";

  const result = await fetch(
    process.env.NEXT_PUBLIC_URL_API + "/api/download/image?url=" + url,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  //   const blob = await result.blob();
  return result;
}
