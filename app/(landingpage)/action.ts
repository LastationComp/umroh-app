"use server";
import { newApiFetch } from "@/lib/Fetcher";
import { getLaravelToken } from "@/lib/Handling/userSession";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function Logout(formData: FormData) {
  const cookiesStorage = cookies();
  cookiesStorage.delete("auth");
}

export async function getUserComparison() {
  const token = await getLaravelToken();

  const res = await newApiFetch({
    url: "/api/profile/comparison",
    token: token,
  });

  if (res.status === 200) {
    const result = await res.json();
    return result.count;
  } else {
    return 0;
  }
}
