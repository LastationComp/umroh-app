import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Pengaturan Travel',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
