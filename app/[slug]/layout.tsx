import { Metadata } from 'next';
import React from 'react';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params }: Props) {
  return {
    title: params.slug + ' - Umroh.ai',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
