import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
// import CitiesTable from './CitiesTable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import CategoriesTable from './CategoriesTable';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import ProvinceTable from './ProvinceTable';

export default function CategoriesPage() {
  return (
    <Card className="flex flex-col gap-3 bg-white">
      <CardHeader>
        <div className="flex justify-between">
          <span className="font-bold">Data Kategori</span>
          <FormBuilder
            endpoint="/api/dashboard/categories"
            refreshEndpoint="/api/dashboard/categories"
            forms={[
              {
                name: 'category_name',
                label: 'Nama Kategori',
                type: 'text',
                placeholder: 'Masukkan Nama Kategori...',
              },
            ]}
          />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea>
          <CategoriesTable />
          <ScrollBar orientation={'horizontal'} />
        </ScrollArea>
      </CardContent>

    </Card>
  );
}
