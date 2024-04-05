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
  ];
  return (
    <section>
      <DataTable columns={columns} data={data} />
    </section>
  );
}
