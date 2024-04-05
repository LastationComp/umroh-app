import { Metadata } from 'next';
import React from 'react';
import SettingCard from './SettingCard';

export const metadata: Metadata = {
  title: 'Profile Saya - Umroh.ai',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-screen h-auto flex justify-center p-3 container">
      <SettingCard>{children}</SettingCard>
    </section>
  );
}
