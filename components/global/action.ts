"use server";
import { AuthOptions } from "@/app/api/auth/AuthOptions";
import { apiFetch } from "@/lib/Fetcher";
import { delay } from "@/lib/Promise/Delay";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export async function handleSubmit(
  prevState: any,
  formData: FormData,
  endpoint: string,
  tag: string = ""
) {
  const session = await getServerSession(AuthOptions);
  const res = await apiFetch(endpoint, session?.user.tokenApi ?? "", "DELETE");
  if (!res.ok || res.status !== 200)
    return {
      type: "error",
      success: false,
      message: "Error",
    };

  const result = await res.json();

  if (tag) revalidateTag(tag);

  return {
    type: "success",
    success: true,
    message: result.message,
  };
}
