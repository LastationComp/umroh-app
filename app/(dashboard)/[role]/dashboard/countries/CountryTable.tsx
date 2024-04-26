import { DataTable } from '@/components/ui/data-table';
import React from 'react';
import { columns } from './Country';
import DataTableBuilder from '@/components/builder/DataTableBuilder';

export default async function CountryTable() {
  return (
    <section>
      <DataTableBuilder columns={columns} endpoint="/api/dashboard/countries" />
    </section>
  );
}
