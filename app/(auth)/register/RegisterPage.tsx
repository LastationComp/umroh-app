import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { IoLogoGoogle } from 'react-icons/io5';

export default function RegisterPage() {
  return (
    <section className="flex flex-col gap-5 items-center">
      <span className="text-2xl font-bold">Daftar Umroh.ai</span>
      <span className="text-sm text-center">Masukkan data anda untuk daftar ke umroh.ai</span>
      <form action="" className="w-full flex flex-col gap-3" method="post">
        <Input type="text" name="name" className="w-full outline outline-1 outline-slate-400" placeholder="Masukkan Nama Anda..." />
        <Input type="email" name="email" className="w-full outline outline-1 outline-slate-400" placeholder="Masukkan Email Anda..." />
        <Input type="password" name="password" className="w-full outline outline-1 outline-slate-400" placeholder="Masukkan Password Anda..." />
        <Button>Masuk</Button>
      </form>
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <div className="w-full">
        <Button className="text-sm w-full flex gap-3 items-center" variant={'outline'}>
          <IoLogoGoogle />
          Register with Google
        </Button>
      </div>
    </section>
  );
}
