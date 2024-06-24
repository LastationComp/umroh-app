import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Daftar',
  description: 'Register to full access ' + process.env.NEXT_PUBLIC_APP_NAME,
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="bg-white">{children}</section>;
}
