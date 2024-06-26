import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import AirlinesTable from './AirlinesTable';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function AirlinesPage() {
  return (
    <Card className="flex flex-col gap-3 bg-white">
      <CardHeader>
        <div className="flex justify-between">
          <span className="font-bold">Data Penerbangan</span>
          <FormBuilder
            endpoint="/api/dashboard/airlines"
            refreshEndpoint="/api/dashboard/airlines"
            forms={[
              {
                name: 'image',
                label: 'Ikon atau Gambar',
                type: 'file',
                placeholder: 'Masukkan Gambar',
              },
              {
                name: 'name',
                label: 'Pesawat',
                type: 'text',
                placeholder: 'Masukkan Nama Pesawat...',
              },
            ]}
          />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea>
          <AirlinesTable />
          <ScrollBar orientation={'horizontal'} />
        </ScrollArea>
      </CardContent>

    </Card>
  );
}
