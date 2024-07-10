"use server";

import { getServerSession } from "next-auth";
import { AuthOptions } from "../api/auth/AuthOptions";

export async function getUserRole() {
  const session = await getServerSession(AuthOptions);

  return session?.user.role;
}
