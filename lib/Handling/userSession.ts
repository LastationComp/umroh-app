"use server";

import { AuthOptions } from "@/app/api/auth/AuthOptions";
import { getServerSession } from "next-auth";

export async function getLaravelToken() {
  const session = await getServerSession(AuthOptions);

  return session?.user.tokenApi ?? "";
}

export async function getUserSession() {
  const session = await getServerSession(AuthOptions);
  return session?.user;
}
