import { Metadata } from 'next';
import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import { Separator } from '@/components/ui/separator';
import SideBar from './SideBar';
export const metadata: Metadata = {
  title: 'Dashboard | Umroh.ai',
};
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({ children, params }: { children: React.ReactNode; params: { role: string } }) {
  // return (
  //   <section className="flex relative bg-white">
  //     <DashboardNavbar role={params.role} />
  //     <Separator />
  //     <div className="grid grid-cols-12 h-auto divide-x">
  //       <SideBar role={params.role} />
  //       <div className="col-span-10 md:p-3 p-1">{children}</div>
  //     </div>
  //   </section>
  // );

  return (
    <section className="flex items-stretch justify-stretch relative divide-x">
      <SideBar role={params.role} />
      <div className="flex-1 flex-col relative w-full">
        <DashboardNavbar role={params.role} />
        <section className="p-3">{children}</section>
      </div>
      <ToastContainer position={'top-center'} theme="colored" />
    </section>
  );
}
