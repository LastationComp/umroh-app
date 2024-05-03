'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import SelectPlace from './SelectPlace';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { CardDescription } from '@/components/ui/card';
import LegalityForm from './LegalityForm';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { createTravel } from './action';
import SubmitButton from '@/components/builder/SubmitButton';
import { useRouter } from 'next/navigation';
import nProgress from 'nprogress';
import { initialMessage } from '@/lib/utils';
import Alert from '@/components/callback/Alert';
import { delay } from '@/lib/Promise/Delay';

export default function TravelForm() {
  const [state, setState]: any = useState(initialMessage);
  const router = useRouter();

  const redirect = (url: string) => {
    return router.push(url);
  };

  const handleSubmit = async (formData: FormData) => {
    const result = await createTravel(formData);

    if (!result.success) return setState(result);

    nProgress.start();
    router.refresh();

    await delay(1000);
    redirect('/daftar/travel/verification');
  };
  return (
    <form action={handleSubmit}>
      {state.message && <Alert variant={state.type} message={state.message} />}
      <ScrollArea className="h-[36rem]">
        <section className="flex flex-col gap-3 px-1">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="travel_name">Nama Travel</Label>
              <Input type="text" id="travel_name" required name="name" placeholder="Masukkan Nama Travel Kamu..." />
            </div>
            <div>
              <Label htmlFor="logo_travel">Logo Travel {'(Opsional)'}</Label>
              <Input type="file" id="logo_travel" name="logo" className="file:cursor-pointer cursor-pointer" placeholder="Masukkan Nama Travel Kamu..." />
            </div>
          </div>
          <div>
            <span>Lokasi Perusahaan</span>
            <SelectPlace />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="website">Website {'(Opsional)'}</Label>
              <Input type="text" id="website" name="website" placeholder="Masukkan URL Website Kamu..." />
            </div>
            <div>
              <Label htmlFor="postal_code">Kode Pos</Label>
              <Input type="text" id="postal_code" required name="postal_code" placeholder="Masukkan Kode Pos Kamu..." />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" required name="email" placeholder="Masukkan Nama Travel Kamu..." />
            </div>
            <div>
              <Label htmlFor="phone_number">Nomor Telepon</Label>
              <Input type="number" id="phone_number" required name="no_telp" className="file:cursor-pointer cursor-pointer" placeholder="Masukkan Nama Travel Kamu..." />
            </div>
            <div>
              <Label htmlFor="address">Alamat</Label>
              <Textarea name="address" required id="address" rows={5} placeholder="Masukkan Alamat Perusahaan Kamu..." />
            </div>
            <div>
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea name="description" required id="description" rows={5} placeholder="Gambarkan sedikit tentang travel kamu..." />
            </div>
          </div>

          <Separator />

          <section>
            <span className="font-bold">Legalitas Travel</span>
            <CardDescription>Yuk beritahu kami apakah Perusahaan kamu aman dan legal.</CardDescription>
            <LegalityForm />
          </section>
        </section>
      </ScrollArea>
      <div className="flex justify-end gap-3 my-3">
        <SubmitButton>Daftar</SubmitButton>
        <Button type="reset" onClick={() => redirect('/')} variant={'outline'}>
          Batal
        </Button>
      </div>
    </form>
  );
}
