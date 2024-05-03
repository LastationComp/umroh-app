'use client';
import SubmitButton from '@/components/builder/SubmitButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Session } from 'next-auth';
import React, { useState } from 'react';
import { createPassword } from './action';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Alert from '@/components/callback/Alert';
import { delay } from '@/lib/Promise/Delay';

const initialState = {
  type: 'success',
  message: '',
};

export default function PasswordForm({ session }: { session: Session | null }) {
  const [state, setState]: any = useState(initialState);
  const { update } = useSession();
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    const result = await createPassword(formData, session?.user?.tokenApi ?? '');
    if (result.type !== 'success') return setState(result);
    await update({
      state: formData.get('state'),
    });
    setState(result);
    router.refresh();
    await delay(1000);
    return router.push('/');
  };
  return (
    <section>
      <div className="md:col-span-2 mb-3">{state?.message && <Alert variant={state?.type ?? 'success'} message={state?.message} />}</div>
      <form action={handleSubmit} className="grid gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="new_password">Password Baru</Label>
          <Input id="new_password" name="new_password" type="password" placeholder="Masukkan password baru anda..." required />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="confirm_password">Konfirmasi Password Baru</Label>
          <Input id="confirm_password" name="confirm_password" type="password" placeholder="Masukkan konfirmasi password baru anda..." required />
        </div>
        <input type="hidden" name="state" value={0} />

        <SubmitButton>Buat</SubmitButton>
      </form>
    </section>
  );
}
