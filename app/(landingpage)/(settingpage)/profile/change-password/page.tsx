'use client';
import Alert from '@/components/callback/Alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import React, { RefObject, useRef, useState } from 'react';
import { changePassword } from './action';
import SubmitButton from '@/components/builder/SubmitButton';
import { delay } from '@/lib/Promise/Delay';

const initialState: any = {
  type: 'success',
  message: '',
};

export default function ChangePasswordPage() {
  const [state, setState] = useState(initialState);
  const formRef: any = useRef(null);
  const handleSubmit = async (formData: FormData) => {
    const result = await changePassword(formData);
    await delay(1000);

    if (result.type === 'success') formRef.current.reset();

      setState(result);
  };
  return (
    <section className="flex flex-col gap-3">
      <span className="font-bold">Ubah Password</span>
      <Separator />
      {state.message && <Alert variant={state?.type} message={state.message} />}
      <form ref={formRef} action={handleSubmit} onSubmit={() => setState(initialState)} className="grid gap-3 md:w-1/2">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="old-password">Password Saat Ini</Label>
          <Input type={'password'} required name="old_password" id="old-password" placeholder="Masukkan password saat ini..." />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="new-password">Password Baru</Label>
          <Input type={'password'} required name="new_password" id="new-password" placeholder="Masukkan password baru anda..." />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="re-password">Konfirmasi Password Baru</Label>
          <Input type={'password'} required name="re_password" id="re-password" placeholder="Masukkan ulang password baru anda..." />
        </div>
        <div>
          <SubmitButton>Simpan</SubmitButton>
        </div>
      </form>
    </section>
  );
}
