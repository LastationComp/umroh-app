"use server";

import { delay } from "@/lib/Promise/Delay";

export async function getOrderTracks(query: string) {
  await delay(3000);
  if (!query) return false;
  return true;
}
