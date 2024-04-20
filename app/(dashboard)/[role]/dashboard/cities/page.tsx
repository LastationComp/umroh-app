import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
import CitiesTable from './CitiesTable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
// import ProvinceTable from './ProvinceTable';

export default function CitiesPage() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="font-bold">Data Kota</span>
        <FormBuilder
          endpoint="api.example.com"
          forms={[
            {
              name: 'country_id',
              label: 'Negara',
              type: 'select',
              placeholder: 'Pilih Negara...',
              selectData: [
                {
                  id: '235234213',
                  name: 'Indonesia',
                },
              ],
            },
            {
              name: 'province_id',
              label: 'Provinsi',
              type: 'select',
              placeholder: 'Pilih Provinsi...',
              selectData: [
                {
                  id: '343223',
                  name: 'Jawa Timur',
                },
              ],
            },
            {
              name: 'city',
              label: 'Kota',
              type: 'text',
              placeholder: 'Masukkan Nama Kota...',
            },
          ]}
        />
      </div>
      <ScrollArea>
        <CitiesTable />
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    </section>
  );
}
