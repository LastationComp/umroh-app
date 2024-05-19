'use client';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useContext } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CiMenuKebab } from 'react-icons/ci';
import Link from 'next/link';
import { Clamping } from '@/lib/String/Clamping';
import SAlertContext from '@/components/context/ShadAlert';
import { cancelDraft } from './action';
import { toast } from '@/components/ui/use-toast';
import { useSWRConfig } from 'swr';
export default function DraftCard({ data, index }: { data: any; index?: number }) {
  const SAlert = useContext(SAlertContext);
  const { mutate } = useSWRConfig();
  const deletePacket = (id: string) => {
    SAlert.trigger({
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      title: 'Apakah kamu yakin ingin menghapus paket ini?',
      text: 'Kamu akan kehilangan paket ini selamanya.',
      icon: 'warning',
      async onSuccess() {
        const result = await cancelDraft(id);

        if (!result) return;
        mutate('/api/dashboard/travel/packets');
        return toast({
          title: 'Paket Berhasil Dihapus',
          className: 'bg-green-600 text-white',
        });
      },
    });
  };
  return (
    <Card key={index}>
      <CardHeader>
        <section className="flex justify-between gap-3 w-full">
          <div>
            <CardTitle>{Clamping(data?.title ?? 'Draft ' + index, 30)}</CardTitle>
            <CardDescription>{Clamping(data?.description ?? 'Tidak ada deskripsi...', 30)}</CardDescription>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'ghost'} className="text-lg">
                <CiMenuKebab />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={'end'}>
              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={'packet/' + data?.id + '/draft'}>Ubah Draft</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600" onClick={() => deletePacket(data?.id)}>
                Hapus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </CardHeader>
    </Card>
  );
}
