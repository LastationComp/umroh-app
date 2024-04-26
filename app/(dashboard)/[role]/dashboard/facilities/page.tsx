import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import IconFacilities from '@/components/facilities/IconFacilities';
import FacilitiesTable from './FacilitiesTable';

export default function FacilitiesPage() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="font-bold">Data Fasilitas</span>
        <FormBuilder
          endpoint="/api/dashboard/facilities"
          refreshEndpoint="/api/dashboard/facilities"
          forms={[
            {
              name: 'name',
              label: 'Fasilitias',
              type: 'text',
              placeholder: 'Masukkan Nama Fasilitas...',
            },
            {
              name: 'icon',
              children: <IconFacilities />,
              placeholder: 'Pilih salah satu ikon',
            },
          ]}
        />
      </div>
      <ScrollArea>
        <FacilitiesTable />
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    </section>
  );
}
