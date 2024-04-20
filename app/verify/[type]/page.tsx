import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import VerificationEmail from './VerificationEmail';
import { sendVerificationNotification } from './action';
import Provider from '@/components/Provider';
import { getServerSession } from 'next-auth';
import { AuthOptions } from '@/app/api/auth/AuthOptions';

export default async function VerificationPage({ params }: { params: { type: string } }) {
  const verifyEmail = await sendVerificationNotification(params.type);
  const session = await getServerSession(AuthOptions);
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <Card className="text-center">
        <CardHeader className="capitalize">Verifikasi {params.type} sudah dikirim!</CardHeader>
        <CardContent>
          <span className="text-black/70">Silahkan masukkan kode verifikasi yang sudah dikirim lewat email kamu.</span>
          <Provider session={session}>
            <VerificationEmail hash={verifyEmail?.hash ?? ''} />
          </Provider>
        </CardContent>
      </Card>
    </section>
  );
}
