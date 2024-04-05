'use client';
import React, { createRef, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import avatar from '@/public/profile/avatar.png';
export default function AccountPage() {
  const [urlImage, setUrlImage] = useState('');
  const fileImage = createRef<HTMLInputElement>();
  const handleClick = (e: any) => {
    fileImage.current?.click();
  };
  const handleImage = (e: any) => {
    if (!e.target.files[0]) return;
    const image = URL.createObjectURL(e.target.files[0]);
    setUrlImage(image ?? '');
  };
  return (
    <section className="flex flex-col gap-3">
      <span className="font-bold">Akun Saya</span>
      <Separator />
      <form action="" method="post" className="flex gap-3 md:divide-x w-auto max-md:flex-col max-md:flex-col-reverse">
        <div className="grid gap-3 w-full">
          <div className="grid items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type={'email'} placeholder="Masukkan Email anda..." />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input id="phone-number" type={'number'} placeholder="Masukkan password anda..." />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="birth_place">Alamat</Label>
            <Textarea className="resize-none" placeholder="Masukkan alamat disini..." rows={4} />
          </div>
          <div>
            <Button type={'submit'}>Simpan</Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-3 w-full">
          <div className="flex flex-col items-center gap-3">
            <Image src={urlImage === '' ? avatar : urlImage} className="w-[10rem] object-cover rounded-full cursor-pointer" width={1024} height={1024} alt="My Profile" onClick={handleClick} />
            <input type="file" ref={fileImage} onChange={handleImage} className="hidden" name="image" id="image" />
            <Button type={'button'} variant={'outline'} onClick={handleClick}>
              Pilih Gambar
            </Button>
            <span className="text-sm text-black/60">Ukuran Maks. : 1MB</span>
            <span className="text-sm text-black/60">Format Gambar : .jpg, .png</span>
          </div>
        </div>
      </form>
    </section>
  );
}
