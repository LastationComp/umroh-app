'use client';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Slug } from '@/lib/String/Packet';
import Link from 'next/link';
import React, { Suspense, createRef, useContext, useRef, useState, useTransition } from 'react';
import { RiDraftLine } from 'react-icons/ri';
import { ScrollArea } from '@/components/ui/scroll-area';
import { initialMessage } from '@/lib/utils';
import { cancelDraft, draftPacket } from '../../action';
import Alert from '@/components/callback/Alert';
import SubmitButton from '@/components/builder/SubmitButton';
import LoadingUI from '@/components/Suspense/Loading';
import CardLoading from '@/components/Suspense/CardLoading';
import SAlertContext from '@/components/context/ShadAlert';
import { delay } from '@/lib/Promise/Delay';
import { toast } from '@/components/ui/use-toast';
import { toast as toasty } from 'react-toastify';
import { useRouter } from 'next/navigation';
import PlanForm from './PlanForm';
import TermsAndConditions from './TermsAndConditions';
import VariantsForm from './VariantsForm';
import { IoMdCloudUpload } from 'react-icons/io';
export default function PacketForm({
  packet,
  packetId,
  packetGalleries,
  packetFacilities,
  packetDeparting,
  packetHotels,
  packetCategories,
  packetAirlines,
}: {
  packet: any;
  packetId: string;
  packetGalleries: React.ReactNode;
  packetFacilities: React.ReactNode;
  packetDeparting: React.ReactNode;
  packetHotels: React.ReactNode;
  packetCategories: React.ReactNode;
  packetAirlines: React.ReactNode;
}) {
  const [suspense, startTransition] = useTransition();
  const SATrigger = useContext(SAlertContext);
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState]: any = useState(initialMessage);
  const [slug, setSlug] = useState('');
  const onSlug = (string: string) => {
    setSlug(Slug(string));
  };

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await draftPacket(packetId, formData);
      // setState(result);

      if (!result.success)
        toasty.error(result.message, {
          position: 'top-center',
        });

      if (result.success)
        toasty.success('Data Packet Berhasil Disimpan!', {
          position: 'top-center',
        });

      // router.refresh();
    });
  };

  const cancelPacket = () => {
    SATrigger.trigger({
      cancelButtonText: 'Tidak',
      confirmButtonText: 'Ya',
      title: 'Anda yakin ingin membatalkan draft ini?',
      text: 'Dengan ini anda akan kehilangan packet ini selamanya.',
      icon: 'warning',
      async onSuccess() {
        await delay(1000);
        const result = await cancelDraft(packetId);
        if (!result) return;
        toast({
          title: 'Draft Paket Berhasil Dihapus',
          className: 'bg-green-600 text-white',
        });

        return router.push('/travel/dashboard/packet');
      },
    });
  };

  const publishDraft = (e: any) => {
    e.preventDefault();
    SATrigger.trigger({
      cancelButtonText: 'Tidak',
      confirmButtonText: 'Ya',
      title: 'Kamu yakin ingin mempublish Paket ini?',
      text: 'Dengan ini paket kamu sudah bisa dicari oleh calon jamaah',
      icon: 'warning',
      async onSuccess() {
        const formData = new FormData(formRef.current ?? undefined);

        formData.append('publish', '');
        const result = await draftPacket(packetId, formData);

        if (!result.success)
          toasty.error(result.message, {
            position: 'top-center',
          });

        if (result.success) {
          toasty.success('Data Packet Berhasil Disimpan!', {
            position: 'top-center',
          });
          return router.push('/travel/dashboard/packet');
        }
      },
    });
  };
  return (
    <CardContent>
      <form action={handleSubmit} ref={formRef}>
        <div className="mb-3">{state.message && !suspense && <Alert variant={state?.type ?? 'error'} message={state.message} />}</div>

        <ScrollArea className="h-full relative">
          <CardLoading isLoading={suspense} />

          <section className="grid md:grid-cols-2 gap-5 mx-1">
            <div className="grid gap-1.5">
              <Label htmlFor="title">Nama Paket</Label>
              <Input id="title" type="text" name="title" defaultValue={packet.title ?? ''} placeholder="Masukkan Nama Paket Disini..." onChange={(e) => onSlug(e.target.value)} />
              <CardDescription>Slug : {slug === '' ? packet.slug : slug}</CardDescription>
            </div>
            <div className="grid gap-1.5 mb-auto">
              <Label htmlFor="quota">Kuota Paket</Label>
              <Input id="quota" type="number" placeholder="Masukkan Kuota Paket Disini..." name="quota" defaultValue={packet.quota ?? 0} />
            </div>
            <div className="grid gap-1.5 mb-auto">
              <Label htmlFor="departure_time">Waktu Keberangkatan</Label>
              <Input id="departure_time" name="departure_time" defaultValue={packet.departure_time ?? new Date().toDateString()} type="date" />
            </div>
            <div className="grid gap-1.5 mb-auto relative">
              <Label htmlFor="category">Kategori Paket</Label>
              <Suspense fallback={<LoadingUI />}>{packetCategories}</Suspense>
            </div>
            <div className="grid gap-1.5 mb-auto relative">
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea id="description" name="description" defaultValue={packet.description} placeholder="Masukkan Deskripsi Paket Kamu..." rows={4}></Textarea>
            </div>
          </section>
          <section className="mt-5 mx-1">
            <CardTitle>Detail</CardTitle>
            <div className="grid md:grid-cols-2 gap-5 mt-5">
              <section className="md:col-span-2 col-span-1">
                <span>Gambar Paket</span>
                <Suspense fallback={<LoadingUI />}>{packetGalleries}</Suspense>
              </section>
              <section className="md:col-span-2">
                <span>Fasilitas</span>
                {packetFacilities}
              </section>
              <section className="md:col-span-2">
                <Suspense fallback={<LoadingUI />}>{packetDeparting}</Suspense>
              </section>
              <section className="md:col-span-2">
                <Suspense fallback={<LoadingUI />}>{packetHotels}</Suspense>
              </section>
              <section className="md:col-span-2">
                <Suspense fallback={<LoadingUI />}>{packetAirlines}</Suspense>
              </section>
              <section className="md:col-span-2">
                <PlanForm data={packet?.plans ?? []} />
              </section>
              <section className="md:col-span-2">
                <TermsAndConditions data={packet?.terms_conditions} />
              </section>
              <section className="md:col-span-2">
                <VariantsForm data={packet?.variants} />
              </section>
            </div>
          </section>
        </ScrollArea>
        <section className="flex justify-between items-center mt-5 gap-5 mb-3">
          <Button variant={'outline'} type="button" asChild>
            <Link href={'/travel/dashboard/packet'}>Kembali</Link>
          </Button>
          <div className="flex items-center gap-3">
            {!packet?.is_draft && !packet?.is_active && (
              <Button variant={'default'} disabled={suspense} name="publish" type={'button'} onClick={publishDraft} className="flex items-center gap-3 bg-blue-600 hover:bg-blue-400">
                <span className="max-md:hidden">Publish Draft</span>
                <IoMdCloudUpload />
              </Button>
            )}

            <SubmitButton variant={'default'}>
              <span className="max-md:hidden">Simpan Draft</span>
              <RiDraftLine />
            </SubmitButton>

            <Button type="button" variant={'secondary'} onClick={cancelPacket}>
              Batal
            </Button>
          </div>
        </section>
      </form>
    </CardContent>
  );
}
