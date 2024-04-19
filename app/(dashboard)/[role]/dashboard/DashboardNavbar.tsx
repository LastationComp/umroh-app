import React from 'react';

import ProfileMenu from '@/components/users/profile-menu';

interface DashboardProps {
  role: string;
}

export default function DashboardNavbar({ role }: DashboardProps) {
  return (
    <nav className="py-3 flex justify-between items-center gap-3 px-5 shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold">Umroh.ai Dashboard</span>
        {/* <Separator orientation={'vertical'} className="h-[30px]" /> */}
        {/* <NavigationBar role={role} /> */}
      </div>
      <div>
        <ProfileMenu />
      </div>
    </nav>
  );
}
