"use server";

import { AuthOptions } from "@/app/api/auth/AuthOptions";
import { apiFetch, newApiFetch } from "@/lib/Fetcher";
import { responseData } from "@/lib/Handling/response";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function getPacket(id: string) {
  const session = await getServerSession(AuthOptions);

  const res = await newApiFetch({
    url: "/api/travel/travel-packets/" + id,
    token: session?.user.tokenApi ?? "",
    options: {
      cache: true,
      tag: ["travel-packet"],
    },
  });

  const result = await res.json();

  return result.data;
}

export async function createPacket() {
  const session = await getServerSession(AuthOptions);
  const formData = new FormData();
  formData.set("travel_id", session?.user.travel.id ?? "");
  const res = await apiFetch(
    `/api/travel/travel-packets`,
    session?.user.tokenApi,
    "POST",
    formData
  );

  const result = await res.json();

  if (!res.ok && res.status !== 200) return false;

  return redirect("packet/" + result.data + "/add");
}

export async function draftPacket(id: string, formData: FormData) {
  const session = await getServerSession(AuthOptions);

  const res = await apiFetch(
    "/api/travel/travel-packets/" + id + "/draft",
    session?.user.tokenApi ?? "",
    "POST",
    formData
  );

  const result = await res.json();

  revalidateTag("travel-packet");
  return result;
}

export async function getPacketGalleries(id: string) {
  const session = await getServerSession(AuthOptions);

  const res = await newApiFetch({
    url: `/api/travel/travel-packets/${id}/galleries`,
    token: session?.user.tokenApi ?? "",
    options: {
      cache: true,
      tag: ["travel-packet-galleries"],
    },
  });

  const result = await res.json();
  return result.data;
}

export async function uploadGallery(id: string, formData: FormData) {
  const session = await getServerSession(AuthOptions);

  const res = await apiFetch(
    `/api/travel/travel-packets/${id}/galleries`,
    session?.user.tokenApi ?? "",
    "POST",
    formData
  );

  revalidateTag("travel-packet-galleries");
  return await res.json();
}
