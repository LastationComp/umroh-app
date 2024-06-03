"use server";

import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { AuthOptions } from "../../auth/AuthOptions";
import { newApiFetch } from "@/lib/Fetcher";
import { responseData } from "@/lib/Handling/response";

export async function GET(req: NextRequest) {
  const session = await getServerSession(AuthOptions);
  const searchParams = req.nextUrl.searchParams;
  const res = await newApiFetch({
    url: "/api/data/hotels?" + searchParams.toString(),
    token: session?.user.tokenApi ?? "",
  });

  const result = await res.json();

  return responseData(result.data);
}
