import { Metadata } from 'next';
import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import { Separator } from '@/components/ui/separator';
import SideBar from './SideBar';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const metadata: Metadata = {
  title: 'Dashboard | Umroh.ai',
};

export default function Layout({ children, params }: { children: React.ReactNode; params: { role: string } }) {
  return (
    <section className="h-screen flex flex-col w-screen bg-white">
      <DashboardNavbar role={params.role} />
      <Separator />
      <div className="grid grid-cols-12 divide-x h-full mt-[60px]">
        <SideBar role={params.role} />
        <div className="col-span-10 md:p-3 p-1">{children}</div>
      </div>
    </section>
  );
}
