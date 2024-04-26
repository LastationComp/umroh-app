'use client';
import DataTableBuilder from '@/components/builder/DataTableBuilder';
import FormBuilder from '@/components/builder/FormBuilder';
import DeleteButton from '@/components/dashboard/DeleteButton';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
type Categories = {
  id: string | number;
  category_name: string;
};
export default function CategoriesTable() {
  const columns: ColumnDef<Categories>[] = [
    {
      accessorKey: 'no',
      header: () => <div className="text-center">NO</div>,
      cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
      enableHiding: false,
    },
    {
      accessorKey: 'category_name',
      header: 'Kategori',
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const category = row.original;

        return (
          <section className="flex gap-3">
            <FormBuilder
              type="Edit"
              endpoint={'/api/dashboard/categories/' + category.id}
              refreshEndpoint="/api/dashboard/categories"
              forms={[
                {
                  name: 'category_name',
                  label: 'Kategori',
                  type: 'text',
                  currentValue: category.category_name,
                  placeholder: 'Masukkan Nama Kategori...',
                },
              ]}
            />
            <DeleteButton endpoint={'/api/dashboard/categories/' + category.id} refreshEndpoint="/api/dashboard/categories" />
          </section>
        );
      },
    },
  ];

  return <DataTableBuilder columns={columns} endpoint={'/api/dashboard/categories'} />;
}
