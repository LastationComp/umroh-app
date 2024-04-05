'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Country = {
  id: number;
  no: number;
  name: string;
};

export const columns: ColumnDef<Country>[] = [
  {
    accessorKey: 'no',
    header: 'NO',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const country = row.original;

      return (
        <section className="flex gap-3">
          <Button variant={'outline'}>Edit</Button>
          <Button>Delete</Button>
        </section>
      );
    },
  },
];
