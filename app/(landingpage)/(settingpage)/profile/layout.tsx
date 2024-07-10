import { Metadata } from 'next';
import React from 'react';
import SettingCard from './SettingCard';
import { getServerSession } from 'next-auth';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import Provider from '@/components/Provider';

export const metadata: Metadata = {
  title: {
    template: '%s | ' + process.env.NEXT_PUBLIC_APP_NAME,
    default: 'Profile Saya',
  },
};
export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(AuthOptions);
  return (
    <Provider session={session}>
      <section className="w-screen h-auto flex justify-center p-3 container">
        <SettingCard session={session}>{children}</SettingCard>
      </section>
    </Provider>
  );
}
