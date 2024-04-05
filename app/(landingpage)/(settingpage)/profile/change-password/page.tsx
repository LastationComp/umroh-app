import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import React from 'react';

export default function ChangePasswordPage() {
  return (
    <section className="flex flex-col gap-3">
      <span className="font-bold">Ubah Password</span>
      <Separator />
      <form action="" method="post" className="grid gap-3 w-auto">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="old-password">Password Saat Ini</Label>
          <Input type={'password'} id="old-password" placeholder="Masukkan password saat ini..." />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="new-password">Password Baru</Label>
          <Input type={'password'} id="new-password" placeholder="Masukkan password baru anda..." />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="re-password">Ulang Password Baru</Label>
          <Input type={'password'} id="re-password" placeholder="Masukkan ulang password baru anda..." />
        </div>
        <div>
          <Button className="w-auto">Simpan</Button>
        </div>
      </form>
    </section>
  );
}
