"use server";

import { AuthOptions } from "@/app/api/auth/AuthOptions";
import { apiFetch, newApiFetch } from "@/lib/Fetcher";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export async function saveSettings(formData: FormData) {
  const session = await getServerSession(AuthOptions);
  const staffCanUpdate = !formData.get("staff_can_update") ? "0" : "1";
  const staffCanDelete = !formData.get("staff_can_delete") ? "0" : "1";

  formData.set("staff_can_update", staffCanUpdate);
  formData.set("staff_can_delete", staffCanDelete);
  const res = await apiFetch(
    "/api/travel/settings",
    session?.user.tokenApi ?? "",
    "POST",
    formData
  );
  revalidateTag("travel-settings");
  return res.json();
}

export async function getSettings() {
  const session = await getServerSession(AuthOptions);

  const res = await newApiFetch({
    url: "/api/travel/settings",
    token: session?.user.tokenApi ?? "",
    options: {
      tag: ["travel-settings"],
    },
  });

  if (!res.ok && res.status !== 200) return false;

  const result = await res.json();
  return result.data;
}
