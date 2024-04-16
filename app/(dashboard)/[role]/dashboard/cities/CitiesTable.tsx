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
  province: {
    id: string | number;
    name: string;
  };
  name: string;
};
export default function CitiesTable() {
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
      accessorKey: 'province',
      header: 'Provinsi',
      accessorFn: (row) => row.province.name,
    },
    {
      accessorKey: 'name',
      header: 'Nama',
    },

    {
      id: 'actions',
      cell: ({ row }) => {
        const city = row.original;

        return (
          <section className="flex gap-3">
            <FormBuilder
              type="Edit"
              endpoint="api.example.com"
              forms={[
                {
                  name: 'country_id',
                  label: 'Negara',
                  type: 'select',
                  placeholder: 'Pilih Negara...',
                  currentValue: '235234213',
                  selectData: [
                    {
                      id: '235234213',
                      name: 'Indonesia',
                    },
                  ],
                },
                {
                  name: 'province_id',
                  label: 'Provinsi',
                  type: 'select',
                  placeholder: 'Pilih Provinsi...',
                  currentValue: '343223',
                  selectData: [
                    {
                      id: '343223',
                      name: 'Jawa Timur',
                    },
                  ],
                },
                {
                  name: 'city',
                  label: 'Kota',
                  type: 'text',
                  currentValue: city.name,
                  placeholder: 'Masukkan Nama Kota...',
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
      province: {
        id: 1,
        name: 'Jawa Timur',
      },
      name: 'Lamongan',
    },
  ];
  return <DataTable columns={columns} data={data} />;
}
