import React from 'react';
import CountryTable from './CountryTable';
import FormBuilder from '@/components/builder/FormBuilder';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function CountriesPage() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="font-bold">Data Negara</span>
        <FormBuilder
          endpoint="/api/admin/countries"
          forms={[
            {
              name: 'name',
              label: 'Negara',
              type: 'text',
              placeholder: 'Masukkan Nama Negara...',
            },
          ]}
        />
      </div>
      <ScrollArea>
        <CountryTable />
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    </section>
  );
}
