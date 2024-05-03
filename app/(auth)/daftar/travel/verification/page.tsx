import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import Verification from './verification';
import { checkTravel } from '../action';
import { redirect } from 'next/navigation';

export default async function page() {
  const checkRegistered = await checkTravel();
  if (checkRegistered === true) return redirect('/daftar/travel');
  return (
    <section className="">
      <Card>
        <CardHeader>
          <CardTitle>Verifikasi Travel</CardTitle>
        </CardHeader>
        <CardContent>
          <Verification />
        </CardContent>
      </Card>
    </section>
  );
}
