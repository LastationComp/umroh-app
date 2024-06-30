import { Metadata } from 'next';
import React from 'react';
import { getPacketNameBySlug } from '../action';
type MetadataProps = {
  params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params }: MetadataProps) {
  const title = await getPacketNameBySlug(params.slug);
  return {
    title: title,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
