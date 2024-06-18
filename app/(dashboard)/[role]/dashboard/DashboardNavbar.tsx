import React from 'react';
import ProfileMenu from '@/components/users/profile-menu';
import { getServerSession, Session } from 'next-auth';

interface DashboardProps {
  role: string;
  session: Session | null
}

export default function DashboardNavbar({ role, session }: DashboardProps) {
  return (
    <nav className="py-3 z-40 flex justify-between bg-white items-center gap-3 px-5 shadow-lg">
      <div className="flex items-center gap-3">
        {role === 'travel' && (
          <section className="flex gap-3 items-center">
            <span className="text-black/70">Travel Partner</span>
          </section>
        )}
      </div>
      <div>{session && <ProfileMenu session={session} />}</div>
    </nav>
  );
}
