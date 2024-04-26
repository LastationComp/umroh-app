import React from 'react';
import { getDetailHotel } from './action';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { IoLocation } from 'react-icons/io5';
import Image from 'next/image';
import HotelGalleries from './HotelGalleries';
import GetHotelFacilities from '@/components/facilities/GetHotelFacilities';
import HotelFacilities from '@/components/facilities/HotelFacilities';

import { IoIosStar } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import GetStar from '@/components/global/GetStar';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import FormBuilder from '@/components/builder/FormBuilder';
import InputStar from '@/components/global/Star';
import MultiUploader from '@/components/global/MultiUploader';

export default async function HotelDetailPage({ params }: { params: { hotelId: string } }) {
  const hotel: any = await getDetailHotel(params.hotelId);
  const session = await getServerSession(AuthOptions);
  return (
    <Card className=" p-1">
      <CardHeader className="font-bold">
        <section className="flex justify-between">
          <Button variant={'outline'} asChild>
            <Link href={`/${session?.user.role}/dashboard/hotels`}>
              <ChevronLeftIcon />
            </Link>
          </Button>
          <FormBuilder
            type="Edit"
            endpoint={'/api/dashboard/hotels/' + hotel.id}
            refreshServer={true}
            forms={[
              {
                name: 'logo',
                label: 'Logo Hotel',
                type: 'file',
                placeholder: 'Masukkan Logo Hotel Untuk Mengubah',
                required: false,
              },
              {
                name: 'name',
                label: 'Hotel',
                type: 'text',
                placeholder: 'Masukkan Nama Hotel...',
                currentValue: hotel.name,
              },
              {
                name: 'location',
                label: 'Lokasi',
                type: 'text',
                placeholder: 'Masukkan Lokasi Hotel...',
                currentValue: hotel.location,
              },
              {
                name: 'class',
                children: <InputStar star={hotel.class} />,
                placeholder: 'Masukkan Kelas Hotel',
              },
              {
                name: 'icon',
                children: <HotelFacilities value={hotel.hotel_facilities} />,
                placeholder: 'Pilih Fasilitas Hotel',
              },
              {
                name: 'other_facilities',
                type: 'textarea',
                label: 'Fasilitas Lainnya',
                currentValue: hotel.other_facilities,
              },
              {
                name: 'image[]',
                children: <MultiUploader name="image[]" />,
                placeholder: 'Masukkan Gambar Hotel(opsional)',
              },
            ]}
          />
        </section>
        <section className="flex items-start gap-3">
          {hotel.logo !== 'default.png' && <Image src={hotel.logo} className="w-10 h-10 rounded-full object-cover my-auto" width={100} height={100} alt="" />}

          <section className="flex flex-col">
            <div className="flex gap-1 items-center">
              <span>Hotel {hotel.name}</span>
            </div>
            <GetStar value={hotel.class} />
            <span className="text-sm text-wrap text-black/70 font-normal flex gap-2 items-center">
              <IoLocation /> {hotel.location}
            </span>
          </section>
        </section>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col gap-3">
          <HotelGalleries hotelId={hotel.id} images={hotel.hotel_gallery} />
          <div>
            <span className="font-bold">Fasilitas Hotel</span>
            <GetHotelFacilities data={hotel.hotel_facilities} />
          </div>
          <div>
            <span className="font-bold">Fasilitas Lainnya</span>
            <p>{hotel.other_facilities}</p>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
