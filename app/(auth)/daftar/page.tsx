import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
import RegisterPage from './RegisterPage';

export default function Page() {
  return (
    <section className="grid grid-cols-2 h-screen">
      <div className="flex flex-col p-5 max-md:col-span-2  ">
        <div className="flex justify-between">
          <Link href={'/'} className="md:hidden text-2xl font-bold">
            Umroh.ai
          </Link>

          <Link href={'/'} className="text-black max-md:hidden text-2xl font-bold">
            Umroh.ai
          </Link>
          <Link href={'/masuk'} className="md:hidden">
            <Button variant={'ghost'} className="font-bold md:ml-auto">
              Masuk
            </Button>
          </Link>
        </div>
        <div className="h-full flex justify-center items-center">
          <RegisterPage />
        </div>
      </div>
      <div className="bg-blue-dark p-5 max-md:hidden">
        <div className="flex flex-col justify-between h-full">
          <Link href={'/masuk'} className="md:ml-auto">
            <Button variant={'ghost'} className="font-bold md:ml-auto text-white hover:bg-white/30 hover:text-white">
              Masuk
            </Button>
          </Link>
          <div className="flex justify-end flex-col">
            <p className="text-white text-end">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum culpa ipsam deleniti veniam expedita voluptate amet saepe, odio tempora ratione dignissimos ducimus, soluta beatae iste maiores cupiditate? Ex, temporibus.
            </p>
            <div className="text-sm text-white/70 my-3 ml-auto">Copyright &copy; {new Date().getFullYear()} Umroh.ai</div>
          </div>
        </div>
      </div>
    </section>
  );
}
