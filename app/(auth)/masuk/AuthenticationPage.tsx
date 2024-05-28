'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import React, { SyntheticEvent, useState } from 'react';
import { IoLogoGoogle } from 'react-icons/io5';
import { redirect, usePathname, useRouter, useSearchParams } from 'next/navigation';
import nProgress from 'nprogress';
import SubmitButton from '@/components/builder/SubmitButton';
import { signIn } from 'next-auth/react';
import Alert from '@/components/callback/Alert';
import { delay } from '@/lib/Promise/Delay';
import Link from 'next/link';

export default function AuthenticationPage() {
  const [errMsg, setErrMsg] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const handleSubmit = async (formData: FormData) => {
    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (!res?.ok || res.status !== 200) return setErrMsg('Email or Password is wrong! please try again');

    router.refresh();
    await delay(1000);

    ('use server');
    redirect(searchParams.get('redirect') ?? '/');
  };

  const continueWithGooglo = async () => {
    nProgress.start();
    await signIn('google', { redirect: false });
  };
  return (
    <section className="flex flex-col gap-5 items-center">
      <span className="text-2xl font-bold">Masuk Umroh.ai</span>
      <span className="text-sm text-center">Masukkan username dan password untuk login ke umroh.ai</span>
      <div className="flex w-full">{errMsg !== '' && <Alert variant={'error'} message={errMsg} />}</div>
      <form action={handleSubmit} onSubmit={() => setErrMsg('')} className="w-full flex flex-col gap-3">
        {/* <Input type="text" name="name" className="w-full outline outline-1 outline-slate-400" placeholder="Masukkan Nama Anda..." /> */}
        <Input type="email" name="email" defaultValue={'admin@gmail.com'} className="w-full outline outline-1 outline-slate-400" placeholder="Masukkan Email Anda..." />
        <Input type="password" name="password" defaultValue={'12345678'} className="w-full outline outline-1 outline-slate-400" placeholder="Masukkan Password Anda..." />
        
        <SubmitButton>Masuk</SubmitButton>
      </form>
      <span className="text-sm text-muted-foreground">
        Lupa password kamu?{' '}
        <Link href="/verify/reset-password" className="text-blue-600">
          Klik disini
        </Link>
      </span>
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">atau masuk dengan</span>
        </div>
      </div>
      <div className="w-full">
        <Button onClick={continueWithGooglo} className="text-sm w-full flex gap-3 items-center" variant={'outline'}>
          <IoLogoGoogle />
          Lanjutkan dengan Google
        </Button>
      </div>
    </section>
  );
}
