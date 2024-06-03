import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
import CitiesTable from './CitiesTable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import ProvinceTable from './ProvinceTable';

export default function CitiesPage() {
  return (
    <Card className="flex flex-col gap-3 bg-white">
      <CardHeader>
      <div className="flex justify-between">
        <span className="font-bold">Data Kota</span>
        <FormBuilder
          endpoint="/api/dashboard/cities"
          refreshEndpoint="/api/dashboard/cities"
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
              name: 'province_id',
              label: 'Provinsi',
              type: 'select',
              placeholder: 'Pilih Provinsi...',
              dataType: 'api',
              needFilter: true,
              filterWith: 'country_id',
              apiData: '/api/dashboard/province',
            },
            {
              name: 'name',
              label: 'Kota',
              type: 'text',
              placeholder: 'Masukkan Nama Kota...',
            },
          ]}
        />
      </div>
      </CardHeader>
      <CardContent>
      <ScrollArea>
        <CitiesTable />
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
      </CardContent>
    </Card>
  );
}
