import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import IconFacilities from '@/components/facilities/IconFacilities';
import HotelFacilities from '@/components/facilities/HotelFacilities';
import InputStar from '@/components/global/Star';
import MultiUploader from '@/components/global/MultiUploader';
import HotelsTable from './HotelsTable';
// import FacilitiesTable from './FacilitiesTable';

export default function HotelsPage() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="font-bold">Data Hotel</span>
        <FormBuilder
          endpoint="/api/dashboard/hotels"
          refreshEndpoint="/api/dashboard/hotels"
          forms={[
            {
              name: 'logo',
              label: 'Logo Hotel',
              type: 'file',
              placeholder: 'Masukkan Logo Hotel(opsional)',
              required: false,
            },
            {
              name: 'name',
              label: 'Hotel',
              type: 'text',
              placeholder: 'Masukkan Nama Hotel...',
            },
            {
              name: 'location',
              label: 'Lokasi',
              type: 'text',
              placeholder: 'Masukkan Lokasi Hotel',
            },
            {
              name: 'class',
              children: <InputStar />,
              placeholder: 'Masukkan Kelas Hotel',
            },
            {
              name: 'hotel_facilities[]',
              children: <HotelFacilities />,
              placeholder: 'Pilih fasilitas yang ada pada hotel',
            },
            {
              name: 'other_facilities',
              type: 'textarea',
              label: 'Fasilitas Lainnya',
            },
            {
              name: 'image[]',
              children: <MultiUploader name="image[]" />,
              placeholder: 'Masukkan Gambar Hotel(opsional)',
            },
          ]}
        />
      </div>

      <ScrollArea>
        <HotelsTable />
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    </section>
  );
}
