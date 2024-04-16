'use client';
import FormBuilder from '@/components/builder/FormBuilder';
import DeleteButton from '@/components/dashboard/DeleteButton';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
type Province = {
  id: string | number;
  country: {
    country_id: string | number;
    country_name: string;
  };
  name: string;
};
export default function ProvinceTable() {
  const columns: ColumnDef<Province>[] = [
    {
      accessorKey: 'no',
      header: () => <div className="text-center">NO</div>,
      cell: ({ row }) => <div className="text-center">{row.original.id}</div>,
      enableHiding: false,
    },
    {
      accessorKey: 'country',
      header: 'Negara',
      accessorFn: (row) => row.country.country_name,
    },
    {
      accessorKey: 'name',
      header: 'Nama',
    },

    {
      id: 'actions',
      cell: ({ row }) => {
        const country = row.original;

        return (
          <section className="flex gap-3">
            <FormBuilder
              type="Edit"
              endpoint="api.example.com"
              forms={[
                {
                  name: 'negara',
                  type: 'select',
                  placeholder: 'Masukkan Nama Negara...',
                  currentValue: '1',
                  selectData: [
                    {
                      id: 1,
                      name: country.country.country_name,
                    },
                  ],
                },
                {
                  name: 'province',
                  type: 'text',
                  placeholder: 'Masukkan Nama Provinsi...',
                  currentValue: country.name,
                },
              ]}
            />
            <DeleteButton endpoint="api.example.com/delete" />
          </section>
        );
      },
    },
  ];

  const data = [
    {
      id: 1,
      no: 1,
      country: {
        country_id: 1,
        country_name: 'Indonesia',
      },
      name: 'Jawa Timur',
    },
  ];
  return <DataTable columns={columns} data={data} />;
}
