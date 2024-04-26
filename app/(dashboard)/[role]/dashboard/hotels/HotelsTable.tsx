'use client';
import DataTableBuilder from '@/components/builder/DataTableBuilder';
import FormBuilder from '@/components/builder/FormBuilder';
import DeleteButton from '@/components/dashboard/DeleteButton';
import GetIconFacilities from '@/components/facilities/GetIconFacilities';
import IconFacilities from '@/components/facilities/IconFacilities';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
type Hotel = {
  id: string | number;
  name: string;
  class: string | number;
  logo: string;
  user_created: {
    name: string;
  };
};
export default function HotelsTable() {
  const columns: ColumnDef<Hotel>[] = [
    {
      accessorKey: 'no',
      header: () => <div className="text-center">NO</div>,
      cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
      header: 'Hotel',
    },
    {
      accessorKey: 'class',
      header: 'Kelas Hotel',
      cell: ({ row }) => {
        const hotel = row.original;
        return (
          <section className="flex items-center gap-1">
            <IoIosStar className="text-yellow-400 text-lg" />
            {hotel.class}
          </section>
        );
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const hotel = row.original;

        return (
          <section className="flex gap-3">
            <Button variant={'outline'} className="flex gap-3 items-center" asChild>
              <Link href={'hotels/' + hotel.id}>
                <FaEye />
                <span className="max-md:hidden flex">Detail</span>
              </Link>
            </Button>
            <DeleteButton endpoint={'/api/dashboard/hotels/' + hotel.id} refreshEndpoint="/api/dashboard/hotels" />
          </section>
        );
      },
    },
  ];

  return <DataTableBuilder columns={columns} endpoint={'/api/dashboard/hotels'} />;
}
