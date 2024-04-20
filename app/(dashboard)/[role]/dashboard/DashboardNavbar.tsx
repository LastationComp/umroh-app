import React from 'react';

import ProfileMenu from '@/components/users/profile-menu';
import { getServerSession } from 'next-auth';
import { AuthOptions } from '@/app/api/auth/AuthOptions';

interface DashboardProps {
  role: string;
}

export default async function DashboardNavbar({ role }: DashboardProps) {
  const session = await getServerSession(AuthOptions);
  return (
    <nav className="py-3 flex justify-between items-center gap-3 px-5 shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold">Umroh.ai Dashboard</span>
        {/* <Separator orientation={'vertical'} className="h-[30px]" /> */}
        {/* <NavigationBar role={role} /> */}
      </div>
      <div>{session && <ProfileMenu session={session} />}</div>
    </nav>
  );
}
