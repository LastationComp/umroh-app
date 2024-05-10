import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
// import ProvinceTable from './ProvinceTable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import TravelVerificationTable from './TravelVerificationTable';

export default function TravelVerificationPage() {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="font-bold">Data Verifikasi Travel</span>
      </div>
      <ScrollArea>
        <TravelVerificationTable />
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    </section>
  );
}
