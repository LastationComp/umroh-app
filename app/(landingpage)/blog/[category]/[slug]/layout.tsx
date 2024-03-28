import React from 'react';

type MetadataProps = {
  params: { slug: string; category: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({ params }: MetadataProps) {
  return {
    title: params.slug + ' | ' + params.category + ' - Umroh.ai',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="md:container md:mx-auto max-md:mx-3">{children}</section>;
}
