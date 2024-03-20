import { Button } from '@/components/ui/button';
import React from 'react';
import AuthenticationPage from './AuthenticationPage';
import Link from 'next/link';

export default function Page() {
  return (
    <section className="grid grid-cols-2 h-screen">
      <div className="bg-blue-dark p-5 max-md:hidden">
        <div className="flex flex-col justify-between h-full">
          <Link href={'/'} className="text-white text-2xl font-bold">
            Umroh.ai
          </Link>
          <div>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum culpa ipsam deleniti veniam expedita voluptate amet saepe, odio tempora ratione dignissimos ducimus, soluta beatae iste maiores cupiditate? Ex, temporibus.
            </p>
            <div className="text-sm text-white/70 my-3">Copyright &copy; {new Date().getFullYear()} Umroh.ai</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 max-md:col-span-2 ">
        <div className="flex justify-between">
          <Link href={'/'} className="md:hidden text-2xl font-bold">
            Umroh.ai
          </Link>
          <Link href={'/register'} className="md:ml-auto">
            <Button variant={'ghost'} className="font-bold">
              Daftar
            </Button>
          </Link>
        </div>
        <div className="h-full flex justify-center items-center">
          <AuthenticationPage />
        </div>
      </div>
    </section>
  );
}
