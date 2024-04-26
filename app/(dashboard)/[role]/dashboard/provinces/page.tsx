import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
import ProvinceTable from './ProvinceTable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function ProvincesPage() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="font-bold">Data Provinsi</span>
        <FormBuilder
          endpoint="/api/dashboard/provinces"
          refreshEndpoint="/api/dashboard/province"
          forms={[
            {
              name: 'country_id',
              label: 'Negara',
              type: 'select',
              placeholder: 'Pilih Negara...',
              dataType: 'api',
              apiData: '/api/dashboard/countries',
            },
            {
              name: 'name',
              label: 'Provinsi',
              type: 'text',
              placeholder: 'Masukkan Nama Provinsi...',
            },
          ]}
        />
      </div>
      <ScrollArea>
        <ProvinceTable />
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    </section>
  );
}
