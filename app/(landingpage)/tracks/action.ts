"use server";

import { delay } from "@/lib/Promise/Delay";

export async function getOrderTracks(query: string) {
  await delay(1000);
  if (!query) return false;
  return true;
}
