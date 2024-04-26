'use client';
import DataTableBuilder from '@/components/builder/DataTableBuilder';
import FormBuilder from '@/components/builder/FormBuilder';
import DeleteButton from '@/components/dashboard/DeleteButton';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import React from 'react';
type Airlines = {
  id: string | number;
  image: string;
  airline_name: string;
};
export default function AirlinesTable() {
  const columns: ColumnDef<Airlines>[] = [
    {
      accessorKey: 'no',
      header: () => <div className="text-center">NO</div>,
      cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
      enableHiding: false,
    },
    {
      accessorKey: 'airline_name',
      header: 'Penerbangan',
    },
    {
      accessorKey: 'image',
      header: 'Ikon',
      cell: ({ row }) => {
        const airline = row.original;
        return <Image src={airline.image} alt={airline.airline_name} width={200} height={200} className="w-[50px] object-cover h-[50px]" />;
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const airline = row.original;

        return (
          <section className="flex gap-3">
            <FormBuilder
              type="Edit"
              endpoint={'/api/dashboard/airlines/' + airline.id}
              refreshEndpoint="/api/dashboard/airlines"
              forms={[
                {
                  name: 'image',
                  label: 'Ikon atau Gambar',
                  type: 'file',
                  placeholder: 'Masukkan gambar apabila ingin mengubah',
                  required: false,
                },
                {
                  name: 'name',
                  label: 'Pesawat',
                  type: 'text',
                  currentValue: airline.airline_name,
                  placeholder: 'Masukkan Nama Pesawat...',
                },
              ]}
            />
            <DeleteButton endpoint={'/api/dashboard/airlines/' + airline.id} refreshEndpoint="/api/dashboard/airlines" />
          </section>
        );
      },
    },
  ];

  return <DataTableBuilder columns={columns} endpoint={'/api/dashboard/airlines'} />;
}
