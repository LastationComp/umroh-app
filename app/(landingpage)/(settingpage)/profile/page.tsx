import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

export default function ProfilePage() {
  return (
    <section className="flex flex-col gap-3">
      <span className="font-bold">Profil Saya</span>
      <Separator />
      <form action="" method="post" className="grid gap-3 w-auto">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="name">Nama</Label>
          <Input id="name" placeholder="Masukkan nama anda..." />
        </div>
        <div className="grid items-center gap-1.5">
          <span className="text-sm">Jenis Kelamin</span>
          <RadioGroup defaultValue="option-one" orientation={'vertical'} required>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Laki-laki</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Perempuan</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Lainnya</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="birth_place">Tempat Lahir</Label>
          <Input id="birth_place" placeholder="Masukkan tempat lahir anda..." />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="birth_date">Tanggal Lahir</Label>
          <input
            id="birth_date"
            type={'date'}
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Masukkan tempat lahir anda..."
          />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="birth_place">Alamat</Label>
          <Textarea className="resize-none" placeholder="Masukkan alamat disini..." rows={4} />
        </div>
        <div>
          <Button className="w-auto">Simpan</Button>
        </div>
      </form>
    </section>
  );
}
