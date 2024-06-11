'use client';
import React, { useContext, useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import nProgress from 'nprogress';
import { useRouter } from 'next/navigation';
import { FaBed, FaHotel, FaPlaneDeparture, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
import { formatDate } from '@/lib/Parser/DateFormat';
import { IoLocation, IoTimeSharp } from 'react-icons/io5';
import { CiMenuKebab } from 'react-icons/ci';
import { useSWRConfig } from 'swr';
import SAlertContext from '@/components/context/ShadAlert';
import { cancelDraft } from './action';
import { toast } from 'react-toastify';
import { Card } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

interface PacketProps {
  data: any;
  index?: number;
  travel: any;
}

export default function PublishPacket({ data, index, travel }: PacketProps) {
  const router = useRouter();
  const SAlert = useContext(SAlertContext);
  const { mutate } = useSWRConfig();
  const handleUrlImage = (url: string) => {
    nProgress.start();
    router.push('/paket/' + url);
  };

  const travels = useMemo(() => {
    return {
      role: travel.role,
      can_delete: travel.settings.staff_can_delete,
    };
  }, []);

  const updateAction = (e: any, hrefValue: string) => {
    e.preventDefault();
    nProgress.start();
    return router.push(hrefValue);
  };

  const deletePacket = (id: string) => {
    if (travels.role === 'staff') {
      const staffCanDelete = travels.can_delete;
      if (!staffCanDelete) {
        return toast.error('Anda tidak dapat melakukan Hapus Packet! \n Silahkan Hubungi Manager Anda!');
      }
    }
    SAlert.trigger({
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      title: 'Apakah kamu yakin ingin menghapus paket ini?',
      text: 'Kamu akan kehilangan paket ini selamanya.',
      icon: 'warning',
      async onSuccess() {
        const result = await cancelDraft(id);

        if (!result) return;
        await mutate((key) => Array.isArray(key) && key[0] === '/api/dashboard/travel/packets?is_publish=1');
        return toast.success('Paket Berhasil Dihapus!');
      },
    });
  };

  if (!data) return;
  return (
    <Card className="p-3 hover:outline hover:outline-1 shadow-md  hover:outline-blue-600">
      <div className="flex justify-between gap-3 items-center">
        <Image
          className="rounded object-cover w-[100px] h-[70px] cursor-pointer"
          onClick={() => handleUrlImage(String(data.title).replaceAll(' ', '-'))}
          loading={'lazy'}
          src={data?.galleries[0]?.image_url}
          alt="Pic 1"
          height={100}
          width={100}
        />

        <div className="flex justify-between">
          <div className="grid gap-1.5">
            <Link href={`packet/${data?.id}/draft`} key={index} className="text-sm font-semibold line-clamp-2 hover:text-blue-600">
              {data.title}
            </Link>
            <div className="flex justify-between">
              <span className="text-sm text-orange-400 font-bold">Rp.{data?.variants[0]?.details[0]?.price}</span>
              <span className="text-sm text-black/60">{data?.variants[0]?.details[2]?.title}</span>
            </div>
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
              <DropdownMenuItem onClick={(e) => updateAction(e, 'packet/' + data?.id + '/draft')}>Ubah Paket</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600" onClick={() => deletePacket(data?.id)}>
                Hapus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="my-2">
        <div className="flex justify-between">
          <span className="text-sm">Sisa Seat</span>
          <span className="text-sm font-bold">{data.quota} Seat</span>
        </div>
        <Progress className="" value={data.quota} max={data.quota} />
      </div>
      <Separator />
      <div className="flex justify-between my-2">
        <span className="text-sm flex gap-2 items-center">
          <FaRegCalendarAlt />
          {formatDate(data.departure_time)}
        </span>
        <span className="text-sm flex gap-2 items-center">
          {data?.hotels[0]?.class} <FaRegStar className="text-yellow-500" /> <FaHotel />
        </span>
      </div>
      <div className="flex justify-between my-2">
        <span className="text-sm flex gap-2 items-center">
          <FaPlaneDeparture /> {data.airlines[0].airline_name}
        </span>
        <span className="text-sm flex gap-2 items-center">
          {data.travel_duration} Hari <IoTimeSharp />
        </span>
      </div>
      <div className="flex justify-between my-2">
        <span className="text-sm flex gap-2 items-center">
          <IoLocation /> {data.departings[0].city_name}
        </span>
        <span className="text-sm flex gap-2 items-center">{/* {data.feature_detail} <FaBed /> */}</span>
      </div>
      {/* <div className="flex justify-between items-center my-3">
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={`/blog/pembayaran-syariah`} target="_blank">
                  <Image src={'https://assets.umroh.com/borobudur/img/amitra-syariah.1c01c48.svg'} className={index === 3 || index === 1 ? ' grayscale' : ''} alt="Is Syariah" width={60} height={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pembayaran Syariah</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center gap-1">
          <OrderButton />
          <CompareButton />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Favorites />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-blue-dark">
                <p>Tambahkan ke Favorit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <ShareButton image_url={data?.galleries[0]?.image_url} title={data.title} url={'http://localhost:3000/paket/' + String(data.title).replaceAll(' ', '-')} />
        </div>
      </div> */}
    </Card>
  );
}
