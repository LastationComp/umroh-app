import { Metadata } from 'next';
import React from 'react';
// import { MetronicI18nProvider } from '@/components/_metronic/i18n/Metronici18n';
// import '@/components/_metronic/assets/sass/style.react.scss';
// import '@/components/_metronic/assets/fonticon/fonticon.css';
// import '@/components/_metronic/assets/keenicons/duotone/style.css';
// import '@/components/_metronic/assets/keenicons/outline/style.css';
// import '@/components/_metronic/assets/keenicons/solid/style.css';
// /**
//  * TIP: Replace this style import with rtl styles to enable rtl mode
//  *
//  * import '@/components/_metronic/assets/css/style.rtl.css'
//  **/
// import '@/components/_metronic/assets/sass/style.scss';

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
  // return <MetronicI18nProvider>{children}</MetronicI18nProvider>;
  return children;
}
