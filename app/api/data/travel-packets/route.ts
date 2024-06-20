"use server";

import { newApiFetch } from "@/lib/Fetcher";
import { responseData } from "@/lib/Handling/response";
import { getLaravelToken } from "@/lib/Handling/userSession";
import ParsingParams from "@/lib/String/ParsingParams";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getLaravelToken();
  const queryParams = req.nextUrl.searchParams.toString();
  console.log(queryParams);
  const res = await newApiFetch({
    url: "/api/public/travel-packets" + ParsingParams(queryParams),
    token: token,
  });

  const result = await res.json();

  return NextResponse.json(result.data)
}
