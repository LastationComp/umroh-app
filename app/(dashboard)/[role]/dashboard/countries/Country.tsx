'use client';

import FormBuilder from '@/components/builder/FormBuilder';
import DeleteButton from '@/components/dashboard/DeleteButton';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Country = {
  id: number;
  name: string;
  user_created: {
    name: string;
  };
};

export const columns: ColumnDef<Country>[] = [
  {
    accessorKey: 'no',
    header: () => <div className="text-center">NO</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'user_created',
    header: 'Created By',
    cell: ({ row }) => row.original.user_created.name,
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const country = row.original;

      return (
        <section className="flex gap-3">
          <FormBuilder
            type="Edit"
            endpoint={'/api/dashboard/countries/' + country.id}
            refreshEndpoint="/api/dashboard/countries"
            forms={[
              {
                name: 'name',
                label: 'Negara',
                type: 'text',
                placeholder: 'Masukkan Nama Negara...',
                currentValue: country.name,
              },
            ]}
          />
          <DeleteButton endpoint={'/api/dashboard/countries/' + country.id} refreshEndpoint="/api/dashboard/countries" />
        </section>
      );
    },
  },
];
