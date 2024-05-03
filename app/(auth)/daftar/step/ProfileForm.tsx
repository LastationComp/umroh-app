'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import SubmitButton from '@/components/builder/SubmitButton';
import { useFormState } from 'react-dom';
// import { updateProfile } from '../action';
import Alert from '@/components/callback/Alert';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { updateProfile } from './action';
import { delay } from '@/lib/Promise/Delay';
const initialState = {
  type: 'success',
  message: '',
};
export default function ProfileForm({ data }: { data: any }) {
  const [state, setState]: any = useState(initialState);
  const { update } = useSession();
  const router = useRouter();
  //   const [state, formAction] = useFormState(updateProfile, initialState);
  const formAction = async (formData: FormData) => {
    const res = await updateProfile(formData);
    if (res.type !== 'success') return;
    await update({
      name: formData.get('name'),
      state: formData.get('state'),
    });
    setState(res);
    router.refresh();
    await delay(2000);

    return router.push('/');
  };
  return (
    <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
      <div className="md:col-span-2">{state?.message && <Alert variant={state?.type ?? 'success'} message={state?.message} />}</div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="name">Nama</Label>
        <Input id="name" required name="name" placeholder="Masukkan nama anda..." defaultValue={data.name} />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="birth_place">Tempat Lahir</Label>
        <Input required id="birth_place" name="birth_place" defaultValue={data.birth_place} placeholder="Masukkan tempat lahir anda..." />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="phone_number">Nomor Telepon</Label>
        <Input required id="phone-Number" name="phone_number" placeholder="Masukkan nomor telepon anda..." />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="birth_date">Tanggal Lahir</Label>
        <input
          id="birth_date"
          type={'date'}
          name="birth_date"
          required
          defaultValue={data.birth_date}
          className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Masukkan tempat lahir anda..."
        />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="address">Alamat</Label>
        <Textarea required id="address" className="resize-none" defaultValue={data.address} name="address" placeholder="Masukkan alamat disini..." rows={4} />
      </div>

      <div className="grid items-start pb-[2rem]">
        <span className="text-sm">Jenis Kelamin</span>
        <RadioGroup name="gender" defaultValue={data.gender} orientation={'vertical'} required>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Laki-laki</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Perempuan</Label>
          </div>
        </RadioGroup>
      </div>
      <input type="hidden" name="state" value={1} />
      <div className="md:col-span-2">
        <SubmitButton>Simpan</SubmitButton>
      </div>
    </form>
  );
}
