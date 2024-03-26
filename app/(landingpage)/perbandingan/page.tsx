import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React, { Suspense, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import ComparisonCarts from './ComparisonCarts';

async function getPaketUmroh() {
  const res = await fetch('https://umroh-ai-dummy-api-production.up.railway.app/paket_umroh', { cache: 'no-store' });
  return res.json();
}
export default async function Page() {
  const data = await getPaketUmroh();
  return (
    <Card className="my-3">
      <CardHeader className="font-bold">Bandingkan Paket</CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Suspense fallback={<div>Loading...</div>}>
          <ComparisonCarts paket_umroh={data} />
        </Suspense>
      </CardContent>
    </Card>
  );
}
