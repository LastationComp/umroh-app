'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import React, { SyntheticEvent } from 'react';
import { IoLogoGoogle } from 'react-icons/io5';
import { auth } from './action';
import { usePathname, useSearchParams } from 'next/navigation';
import nProgress from 'nprogress';

export default function AuthenticationPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    nProgress.start();
    await auth(searchParams.get('redirect') ?? '');
  };
  return (
    <section className="flex flex-col gap-5 items-center">
      <span className="text-2xl font-bold">Masuk Umroh.ai</span>
      <span className="text-sm text-center">Masukkan username dan password untuk login ke umroh.ai {pathname}</span>
      <form onSubmit={handleSubmit} method="post" className="w-full flex flex-col gap-3">
        {/* <Input type="text" name="name" className="w-full outline outline-1 outline-slate-400" placeholder="Masukkan Nama Anda..." /> */}
        <Input type="email" name="email" value={'demo@gmail.com'} readOnly className="w-full outline outline-1 outline-slate-400" placeholder="Masukkan Email Anda..." />
        <Input type="password" name="password" value={'demopassword'} readOnly className="w-full outline outline-1 outline-slate-400" placeholder="Masukkan Password Anda..." />
        <Button>Masuk</Button>
      </form>
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">atau masuk dengan</span>
        </div>
      </div>
      <div className="w-full">
        <Button className="text-sm w-full flex gap-3 items-center" variant={'outline'}>
          <IoLogoGoogle />
          Masuk dengan Google
        </Button>
      </div>
    </section>
  );
}
