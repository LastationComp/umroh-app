import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import IconFacilities from '@/components/facilities/IconFacilities';
import FacilitiesTable from './FacilitiesTable';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function FacilitiesPage() {
  return (
    <Card className="flex flex-col gap-3">
      <CardHeader>
        <div className="flex justify-between">
          <span className="font-bold">Data Fasilitas</span>
          <FormBuilder
            formName="Fasilitas"
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
      </CardHeader>
      <CardContent>
        <ScrollArea>
          <FacilitiesTable />
          <ScrollBar orientation={'horizontal'} />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
