'use client';
import DataTableBuilder from '@/components/builder/DataTableBuilder';
import FormBuilder from '@/components/builder/FormBuilder';
import DeleteButton from '@/components/dashboard/DeleteButton';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
type City = {
  id: string | number;
  country: {
    id: string | number;
    name: string;
  };
  province: {
    id: string | number;
    name: string;
  };
  city_name: string;
  user_created: {
    id: string,
    name: string
  }
};
export default function CitiesTable() {
  const columns: ColumnDef<City>[] = [
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
      accessorKey: 'province',
      header: 'Provinsi',
      cell: ({ row }) => row.original.province.name,
    },
    {
      accessorKey: 'city_name',
      header: 'Nama',
    },
    {
      accessorKey: 'user_created',
      header: 'Created By',
      cell: ({row}) => row.original.user_created.name
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const city = row.original;

        return (
          <section className="flex gap-3">
            <FormBuilder
              type="Edit"
              endpoint={'/api/dashboard/cities/' + city.id}
              refreshEndpoint="/api/dashboard/cities"
              forms={[
                {
                  name: 'country_id',
                  label: 'Negara',
                  type: 'select',
                  placeholder: 'Pilih Negara...',
                  dataType: 'api',
                  currentValue: String(city.country.id),
                  apiData: '/api/dashboard/countries',
                },
                {
                  name: 'province_id',
                  label: 'Provinsi',
                  type: 'select',
                  placeholder: 'Pilih Provinsi...',
                  dataType: 'api',
                  needFilter: true,
                  currentValue: String(city.province.id),
                  filterWith: 'country_id',
                  apiData: '/api/dashboard/province',
                },
                {
                  name: 'name',
                  label: 'Kota',
                  type: 'text',
                  currentValue: city.city_name,
                  placeholder: 'Masukkan Nama Kota...',
                },
              ]}
            />
            <DeleteButton endpoint={'/api/dashboard/cities/' + city.id} refreshEndpoint="/api/dashboard/cities" />
          </section>
        );
      },
    },
  ];

  return <DataTableBuilder columns={columns} endpoint={'/api/dashboard/cities'} />;
}
