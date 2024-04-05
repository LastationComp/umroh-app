import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import React from 'react';

export default function TravelSettingPage() {
  return (
    <section className="flex flex-col">
      <span className="font-bold">Pengaturan Travel</span>
      <span className="text-sm text-black/60">Atur aktivitas Travel anda disini.</span>
      <Separator className="my-3" />
      <span className="text-lg font-bold mb-3">Pengaturan Staff</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card className="p-3 rounded-md ">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-bold">Staff dapat mengubah data paket</span>
              <span className="text-sm text-black/60">Staff kamu dapat mengubah semua data paket di travel kamu.</span>
            </div>
            <Switch name="staff_can_update" defaultChecked={true} />
          </div>
        </Card>
        <Card className="p-3 rounded-md outline outline-1 outline-red-500 bg-red-800/10">
          <div className="flex justify-between items-center gap-3">
            <div className="flex flex-col gap-1">
              <span className="font-bold">Staff dapat menghapus data paket</span>
              <span className="text-sm text-black/60">Staff kamu dapat menghapus semua data paket di travel kamu. Demi keamanan, kami mengatur untuk mematikan fitur ini. Namun, kamu tetap dapat mengaktifkannya </span>
            </div>
            <Switch name="staff_can_delete" defaultChecked={false} className="data-[state=checked]:bg-red-500 shadow" />
          </div>
        </Card>
      </div>
      <div>
        <Button className="my-3">Simpan</Button>
      </div>
    </section>
  );
}
