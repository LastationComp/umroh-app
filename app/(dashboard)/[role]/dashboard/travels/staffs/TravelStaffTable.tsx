"use client";
import DataTableBuilder from "@/components/builder/DataTableBuilder";
import FormBuilder from "@/components/builder/FormBuilder";
import DeleteButton from "@/components/dashboard/DeleteButton";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type TravelStaff = {
  id: string | number;
  name: string;
  email: string;
};

export default function TravelStaffTable() {
  const columns: ColumnDef<TravelStaff>[] = [
    {
      accessorKey: "no",
      header: () => <div className="text-center">NO</div>,
      cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
      enableHiding: false,
    },
    {
        accessorKey: 'name',
        header: 'Nama'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    },
    {
        id: 'actions',
        cell: ({row}) => {
            const staff = row.original;
            

            return (
                <section className="flex gap-3">
                  
            <FormBuilder
              type="Edit"
              refreshEndpoint="/api/dashboard/travel/staffs"
              endpoint={'/api/travel/staff/' + staff.id}
              forms={[
                {
                  name: 'name',
                  label: 'Nama',
                  type: 'text',
                  placeholder: 'Masukkan Nama Staff...',
                  currentValue: staff.name,
                },
              ]}
            />
            <DeleteButton endpoint={'/api/travel/staff/' + staff.id} refreshEndpoint="/api/dashboard/travel/staffs" />
            
          </section>
            )
        }
    }
  ];
  return <DataTableBuilder columns={columns} endpoint={'/api/dashboard/travel/staffs'}/>;
}
