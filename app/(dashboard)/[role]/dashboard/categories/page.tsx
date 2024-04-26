import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
// import CitiesTable from './CitiesTable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import CategoriesTable from './CategoriesTable';
// import ProvinceTable from './ProvinceTable';

export default function CategoriesPage() {
  return (
    <section className="flex flex-col gap-3">
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
      <ScrollArea>
        <CategoriesTable />
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    </section>
  );
}
