import { Metadata } from 'next';
import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import SideBar from './SideBar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getServerSession } from 'next-auth';
import { AuthOptions } from '@/app/api/auth/AuthOptions';


export const metadata: Metadata = {
  title: 'Dashboard | Umroh.ai',
};

export default async function Layout({ children, params }: { children: React.ReactNode; params: { role: string } }) {
  const session = await getServerSession(AuthOptions)
  return (
    <section className="flex items-stretch justify-stretch relative divide-x">
      <SideBar role={params.role} />
      <div className="flex-1 flex-col relative w-full">
        <DashboardNavbar role={params.role} session={session} />
        <section className="p-3">{children}</section>
      </div>
      <ToastContainer position={'top-center'} theme="colored" />
    </section>
  );
}
