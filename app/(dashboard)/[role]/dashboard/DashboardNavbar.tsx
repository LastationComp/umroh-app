import React from "react";

import ProfileMenu from "@/components/users/profile-menu";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/AuthOptions";
import { Separator } from "@/components/ui/separator";

interface DashboardProps {
  role: string;
}

export default async function DashboardNavbar({ role }: DashboardProps) {
  const session = await getServerSession(AuthOptions);
  return (
    <nav className="py-3 z-40 flex justify-between fixed w-full bg-white items-center gap-3 px-5 shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold">Dashboard</span>
        {session?.user.role === "travel" && (
          <section className="flex gap-3 items-center">
            <Separator orientation={"vertical"} className="h-5" />
            <span className="text-black/70">Travel Partner</span>
          </section>
        )}
      </div>
      <div>{session && <ProfileMenu session={session} />}</div>
    </nav>
  );
}
