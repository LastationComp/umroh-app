import React from 'react';
import CountryTable from './CountryTable';
import FormBuilder from '@/components/builder/FormBuilder';

export default function CountriesPage() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="font-bold">Data Negara</span>
        <FormBuilder
          endpoint="api.example.com"
          forms={[
            {
              name: 'negara',
              type: 'text',
              placeholder: 'Masukkan Nama Negara...',
            },
          ]}
        />
      </div>
      <CountryTable />
    </section>
  );
}
