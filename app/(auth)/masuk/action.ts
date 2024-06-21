"use server";

import { AuthOptions } from "@/app/api/auth/AuthOptions";
import { newApiFetch } from "@/lib/Fetcher";
import { getLaravelToken } from "@/lib/Handling/userSession";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function redirectTo(url: string) {
  await redirect(url);
}

export async function getUserComparison() {
  const token = await getLaravelToken();

  const res = await newApiFetch({
    url: "/api/profile/comparison",
    token: token,
  });

  const result = await res.json();

  console.log(result);
  return result;
}
