'use client';
import React, { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';
import SubmitButton from '@/components/builder/SubmitButton';
import { verify } from './action';
import Alert from '@/components/callback/Alert';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { delay } from '@/lib/Promise/Delay';

const initialState: any = {
  type: 'success',
  message: '',
};
export default function VerificationEmail({ hash }: { hash: string }) {
  const [state, setState]: any = useState(initialState);
  const router = useRouter();
  const { update } = useSession();
  const verifyAction = async (formData: FormData) => {
    setState(initialState);
    const result = await verify(formData, 'email');

    setState(result);
    
    if (result?.type === 'success') {
      update({
        isEmailVerified: true,
      });
      router.refresh();

      await delay(1000);
      ('use server');
      redirect('/');
    }
  };
  return (
    <form action={verifyAction} className="flex flex-col gap-3 items-center justify-center my-3">
      {state?.message && <Alert variant={state?.type} message={state?.message} />}
      <input type="hidden" name="hash" value={hash} />
      <input type="hidden" name="type" value={'email'} />
      <InputOTP maxLength={6} name="token">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <SubmitButton>Verifikasi</SubmitButton>
    </form>
  );
}
