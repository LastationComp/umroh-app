import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
// import ProvinceTable from './ProvinceTable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import StaffTable from './StaffTable';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function StaffPage() {
  return (
    <Card className="flex flex-col gap-3 bg-white">
      <CardHeader>
        <div className="flex justify-between">
          <span className="font-bold">Data Staff</span>
          <FormBuilder
            endpoint="/api/dashboard/staff"
            refreshEndpoint="/api/dashboard/province"
            forms={[
              {
                name: 'name',
                label: 'Nama',
                type: 'text',
                placeholder: 'Masukkan nama Staff...',
              },
              {
                name: 'email',
                label: 'Email',
                type: 'text',
                placeholder: 'Masukkan Email Staff...',
              },
              {
                name: 'phone_number',
                label: 'Nomor Telepon',
                type: 'text',
                placeholder: 'Masukkan Nomor Telepon Staff...',
              },
              {
                name: 'address',
                label: 'Alamat',
                type: 'textarea',
                placeholder: 'Masukkan Alamat Staff...',
              },
              {
                name: 'birth_date',
                label: 'Tanggal Lahir',
                type: 'date',
                placeholder: 'Masukkan Tanggal Lahir Staff...',
              },
              {
                name: 'birth_place',
                label: 'Tempat Kelahiran',
                type: 'text',
                placeholder: 'Masukkan Tempat Kelahiran Staff...',
              },
              {
                name: 'gender',
                label: 'Jenis Kelamin',
                type: 'select',
                selectData: [
                  {
                    id: 'Male',
                    name: 'Laki-laki',
                  },
                  {
                    id: 'Female',
                    name: 'Perempuan',
                  },
                ],
              },
            ]}
          />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea>
          <StaffTable />
          <ScrollBar orientation={'horizontal'} />
        </ScrollArea>
      </CardContent>

    </Card>
  );
}
