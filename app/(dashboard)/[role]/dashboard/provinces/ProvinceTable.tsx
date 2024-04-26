'use client';
import DataTableBuilder from '@/components/builder/DataTableBuilder';
import FormBuilder from '@/components/builder/FormBuilder';
import DeleteButton from '@/components/dashboard/DeleteButton';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
type Province = {
  id: string | number;
  country: {
    id: string | number;
    name: string;
  };
  name: string;
  user_created: {
    id: string;
    name: string;
  };
};
export default function ProvinceTable() {
  const columns: ColumnDef<Province>[] = [
    {
      accessorKey: 'no',
      header: () => <div className="text-center">NO</div>,
      cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
      enableHiding: false,
    },
    {
      accessorKey: 'country',
      header: 'Negara',
      cell: ({ row }) => row.original.country.name,
    },
    {
      accessorKey: 'name',
      header: 'Nama',
    },
    {
      accessorKey: 'user_created',
      header: 'Created By',
      cell: ({ row }) => row.original.user_created.name,
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const province = row.original;

        return (
          <section className="flex gap-3">
            <FormBuilder
              type="Edit"
              refreshEndpoint="/api/dashboard/province"
              endpoint={'/api/dashboard/provinces/' + province.id}
              forms={[
                {
                  name: 'country_id',
                  label: 'Negara',
                  type: 'select',
                  placeholder: 'Masukkan Nama Negara...',
                  currentValue: String(province.country.id),
                  dataType: 'api',
                  apiData: '/api/dashboard/countries',
                },
                {
                  name: 'name',
                  label: 'Provinsi',
                  type: 'text',
                  placeholder: 'Masukkan Nama Provinsi...',
                  currentValue: province.name,
                },
              ]}
            />
            <DeleteButton endpoint={'/api/dashboard/provinces/' + province.id} refreshEndpoint="/api/dashboard/province" />
          </section>
        );
      },
    },
  ];

  return <DataTableBuilder columns={columns} endpoint={'/api/dashboard/province'} />;
}
