"use server";
import { newApiFetch } from "@/lib/Fetcher";
import { getLaravelToken } from "@/lib/Handling/userSession";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function Logout(formData: FormData) {
  const cookiesStorage = cookies();
  cookiesStorage.delete("auth");
}

export async function Compare(packetIds?: string[]) {
  const token = await getLaravelToken();

  const formData = new FormData();
  formData.set("compare_ids", packetIds?.join(",") ?? "");

  const res = await newApiFetch({
    url: "/api/public/travel-packets/compare",
    method: "POST",
    token: token,
    body: formData,
    options: {
      cache: false,
    },
  });

  revalidateTag("public-travel-packets");
  // console.log(await res.json());
  if (!res.ok && res.status !== 200) return false;

  return true;
}

export async function getUserComparison() {
  const token = await getLaravelToken();

  const res = await newApiFetch({
    url: "/api/profile/comparison",
    token: token,
  });

  if (res.status === 200) {
    const result = await res.json();
    return result;
  } else {
    return false;
  }
}
