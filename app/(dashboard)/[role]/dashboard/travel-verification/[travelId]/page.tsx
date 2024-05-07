import React from 'react';
import FormBuilder from '@/components/builder/FormBuilder';
// import ProvinceTable from './ProvinceTable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default async function TravelVerificationPage({ params }: { params: { travelId: string } }) {
    
  return (
    <section className="flex items-center justify-center">
      <Card className="w-full">
        <CardHeader className="flex items-center gap-3">
          {/* <Image alt='' /> */}
          <div>
            <CardTitle>Travel Detail</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div>tes</div>
        </CardContent>
      </Card>
    </section>
  );
}
