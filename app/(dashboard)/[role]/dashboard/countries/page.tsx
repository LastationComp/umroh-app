import React from 'react';
import CountryTable from './CountryTable';
import FormBuilder from '@/components/builder/FormBuilder';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function CountriesPage() {
  return (
    <Card className="flex flex-col gap-3 bg-white">
      <CardHeader>
        <div className="flex justify-between">
          <span className="font-bold">Data Negara</span>
          <FormBuilder
            endpoint="/api/dashboard/countries"
            refreshEndpoint="/api/dashboard/countries"
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
      </CardHeader>
      <CardContent>
        <ScrollArea>
          <CountryTable />
          <ScrollBar orientation={'horizontal'} />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
