import { CardDescription } from '@/components/ui/card';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Segera Datang',
};

export default function Page() {
  return (
    <section className="100-svh h-svh flex justify-center items-center container mx-auto">
      <div className="text-2xl max-md:text-sm flex flex-col items-center text-center">
        <span className="font-semibold">Halaman Masih Dalam Perbaikan...</span>
        <CardDescription>Mohon bersabar. Kami sedang mengalami perbaikan pada halaman ini.</CardDescription>
        <CardDescription>
          <Link href={'/'} className='text-blue-600'>Kembali ke halaman utama</Link>
        </CardDescription>
        <Image
          src={'/comingsoon.png'}
          alt="Segera Datang Ya..."
          className="w-[500px]"
          style={{
            width: 'auto',
            height: 'auto',
          }}
          width={500}
          height={1000}
        />
      </div>
    </section>
  );
}
