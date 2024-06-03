import { AuthOptions } from "@/app/api/auth/AuthOptions";
import { apiFetch } from "@/lib/Fetcher";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch(
    "/api/travel/categories?pagination=0",
    session?.user?.tokenApi ?? ""
  );

  const result = await res.json();
  return Response.json(result?.data);
}
