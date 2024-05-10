"use server";
import { AuthOptions } from "@/app/api/auth/AuthOptions";
import { apiFetch } from "@/lib/Fetcher";
import { responseData, responseError } from "@/lib/Handling/response";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function GetTravel(id: string) {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch(
    "/api/dashboard/travel/" + id,
    session?.user.tokenApi ?? ""
  );

  const result = await res.json();

  if (!res.ok || res.status !== 200)
    return redirect(`/${session?.user.role}/dashboard/travel-verification`);

  if (Number(result.data.state) !== 0)
    return redirect(`/${session?.user.role}/dashboard/travel-verification`);

  return result.data;
}

export async function cancelTravel(id: string) {
  const session = await getServerSession(AuthOptions);

  const formData = new FormData();

  formData.set("id", id);
  formData.set("state", "2");

  const res = await apiFetch(
    "/api/dashboard/travel/verification",
    session?.user.tokenApi ?? "",
    "POST",
    formData
  );

  const result = await res.json();

  return result;
}

export async function downloadCredentialTravel(url: string, title: string) {
  return process.env.APP_URL + "/api/download/image?url=" + url;
}

export async function approveTravel(id: string) {
  const session = await getServerSession(AuthOptions);
  const formData = new FormData();

  formData.set("id", id);
  formData.set("state", "1");

  const res = await apiFetch(
    "/api/dashboard/travel/verification",
    session?.user.tokenApi ?? "",
    "POST",
    formData
  );

  const result = await res.json();

  return result;
}
