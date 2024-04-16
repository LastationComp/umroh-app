import { DataTable } from '@/components/ui/data-table';
import React from 'react';
import { columns } from './Country';

export default function CountryTable() {
  const data = [
    {
      id: 1,
      no: 1,
      name: 'Indonesia',
    },
    {
      id: 2,
      no: 2,
      name: 'Malaysia',
    },
  ];
  return (
    <section>
      <DataTable columns={columns} data={data} />
    </section>
  );
}
