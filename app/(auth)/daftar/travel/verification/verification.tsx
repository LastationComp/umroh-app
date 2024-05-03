'use client';
import { showAlert } from '@/components/context/ShadAlert';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { cancelTravel } from '../action';

export default function Verification({ state = 0 }: { state?: number }) {
  const router = useRouter();
  const cancelApproval = () => {
    return showAlert({
      title: 'Apakah kamu yakin?',
      text: 'Kamu yakin ingin membatalkan pendaftaran? Tentu kamu bisa mengajukan pendaftaran kembali.',
      icon: 'warning',
      confirmButtonText: 'Batalkan',
      cancelButtonText: 'Tidak',
      onSuccess: async () => {
        const result = await cancelTravel();
        if (!result) return showAlert({ icon: 'error', title: 'Terjadi Kesalahan' });

        return router.refresh();
      },
    });
  };
  if (state === 0)
    return (
      <section className="flex flex-col items-center justify-center">
        <span>Sedang Menunggu Verifikasi...</span>
        <span className="text-sm text-black/60 text-center">Mohon ditunggu ya. Kami sedang memverifikasi data kamu.</span>
        <div className="flex gap-3">
          <Button variant={'link'} asChild>
            <Link href={'/'} className="items-center my-auto">
              Kembali ke Halaman
            </Link>
          </Button>

          <Separator orientation={'vertical'} className="h-8 my-auto" />
          <Button onClick={cancelApproval} variant={'link'} className="items-center my-auto text-red-600">
            Batalkan Pendaftaran
          </Button>
        </div>
      </section>
    );
}
