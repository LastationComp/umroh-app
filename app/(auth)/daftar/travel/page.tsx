import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import TravelForm from './TravelForm';
import { checkTravel } from './action';
import { redirect } from 'next/navigation';

export default async function Page() {
  const checkRegistered = await checkTravel();
  if (!checkRegistered) return redirect('/daftar/travel/verification');
  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulir Pendaftaran Travel </CardTitle>
      </CardHeader>

      <CardContent>
        <TravelForm />
      </CardContent>
    </Card>
  );
}
