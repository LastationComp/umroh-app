import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React, { Suspense } from 'react';
import LoadingUI from '@/components/Suspense/Loading';
import Comparison from './Comparison';

export default async function Page() {
  return (
    <Card className="my-3">
      <CardHeader className="font-bold">Bandingkan Paket</CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Suspense fallback={<LoadingUI />}>
          <Comparison />
        </Suspense>
      </CardContent>
    </Card>
  );
}
