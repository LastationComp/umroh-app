'use client';
import DataTableBuilder from '@/components/builder/DataTableBuilder';
import FormBuilder from '@/components/builder/FormBuilder';
import DeleteButton from '@/components/dashboard/DeleteButton';
import GetIconFacilities from '@/components/facilities/GetIconFacilities';
import IconFacilities from '@/components/facilities/IconFacilities';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
type Facility = {
  id: string | number;
  name: string;
  icon: string;
};
export default function FacilitiesTable() {
  const columns: ColumnDef<Facility>[] = [
    {
      accessorKey: 'no',
      header: () => <div className="text-center">NO</div>,
      cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
      enableHiding: false,
    },
    {
      accessorKey: 'icon',
      header: 'Fasilitas',
      cell: ({ row }) => (
        <Button variant={'outline'} className="flex gap-3 items-center">
          <GetIconFacilities name={row.original.icon} />
          <span>{row.original.name}</span>
        </Button>
      ),
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const facility = row.original;

        return (
          <section className="flex gap-3">
            <FormBuilder
              type="Edit"
              endpoint={'/api/dashboard/facilities/' + facility.id}
              refreshEndpoint="/api/dashboard/facilities"
              forms={[
                {
                  name: 'name',
                  label: 'Fasilitias',
                  type: 'text',
                  placeholder: 'Masukkan Nama Fasilitas...',
                  currentValue: facility.name,
                },
                {
                  name: 'icon',
                  children: <IconFacilities value={facility.icon} />,
                  placeholder: 'Pilih salah satu ikon',
                },
              ]}
            />
            <DeleteButton endpoint={'/api/dashboard/facilities/' + facility.id} refreshEndpoint="/api/dashboard/facilities" />
          </section>
        );
      },
    },
  ];

  return <DataTableBuilder columns={columns} endpoint={'/api/dashboard/facilities'} />;
}
