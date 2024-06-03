import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
// import ProvinceTable from './ProvinceTable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import TravelVerificationTable from './TravelVerificationTable';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function TravelVerificationPage() {
  return (
    <Card className="flex flex-col gap-3">
      <CardHeader>
        <div className="flex justify-between">
          <span className="font-bold">Data Verifikasi Travel</span>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea>
          <TravelVerificationTable />
          <ScrollBar orientation={'horizontal'} />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
