import React from 'react';

import ProfileMenu from '@/components/users/profile-menu';
import { getServerSession } from 'next-auth';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { Separator } from '@/components/ui/separator';

interface DashboardProps {
  role: string;
  children: React.ReactNode;
}

export default async function DashboardNavbar({ role, children }: DashboardProps) {
  const session = await getServerSession(AuthOptions);
  return (
    <section className='h-svh pb-auto'>
      <nav className="py-3 z-40 flex justify-between bg-white items-center gap-3 px-5 shadow-lg">
        <div className="flex items-center gap-3">
          {session?.user.role === 'travel' && (
            <section className="flex gap-3 items-center">
              <span className="text-black/70">Travel Partner</span>
            </section>
          )}
        </div>
        <div>{session && <ProfileMenu session={session} />}</div>
      </nav>
      <section className="p-3">{children}</section>
    </section>
  );
}
