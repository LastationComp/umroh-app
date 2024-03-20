import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Login Page - Umroh.ai',
  description: 'Login to full access umroh.ai',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
