'use server'

import { newApiFetch } from "@/lib/Fetcher";
import { getLaravelToken } from "@/lib/Handling/userSession";

export async function getUserComparison() {
    const token = await getLaravelToken();
  
    const res = await newApiFetch({
      url: "/api/profile/comparison",
      token: token,
    });
  
    const result = await res.json();

    return result;
  }