"use server";
import { newApiFetch } from "@/lib/Fetcher";
import { getLaravelToken } from "@/lib/Handling/userSession";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function Compare(urlRedirect?: string, packetIds?: string[]) {
  const token = await getLaravelToken();
  if (!token)
    return redirect(
      "/masuk" + (!urlRedirect ? "" : "?redirect=" + urlRedirect)
    );

  const formData = new FormData();
  console.log(packetIds);
  formData.set("compare_ids", packetIds?.join(",") ?? "");

  const res = await newApiFetch({
    url: "/api/public/travel-packets/compare",
    method: "POST",
    token: token,
    body: formData,
  });

  revalidateTag("public-travel-packets");
  if (!res.ok && res.status !== 200) return false;

  return true;
}

export async function checkCompare(urlRedirect?: string) {
  const token = await getLaravelToken();

  if (!token) {
    redirect("/masuk" + (!urlRedirect ? "" : "?redirect=" + urlRedirect));
    return false;
  } else {
    return true;
  }
}

export async function revalidateTravelPackets() {
  revalidateTag("public-travel-packets");
}
