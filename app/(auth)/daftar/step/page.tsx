import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getServerSession } from 'next-auth';
import React from 'react';
import ProfileForm from './ProfileForm';
import Provider from '@/components/Provider';
import PasswordForm from './PasswordForm';

export default async function page() {
  const session = await getServerSession(AuthOptions);
  const state = Number(session?.user.state);
  if (state === 0)
    return (
      <section className="flex w-full h-full items-center justify-center md:container max-md:px-3 md:mx-auto">
        <Card className="w-full">
          <CardHeader className="font-bold">Lengkapi Profil Anda</CardHeader>
          <CardContent className="">
            <Provider session={session}>
              <ProfileForm data={session?.user} />
            </Provider>
          </CardContent>
        </Card>
      </section>
    );
  if (state === 2)
    return (
      <section className="flex w-full h-full items-center justify-center md:container max-md:px-3 md:mx-auto">
        <Card className="max-w-lg w-full">
          <CardHeader className="font-bold">Buat Password Baru Anda</CardHeader>
          <CardContent className="">
            <Provider session={session}>
              <PasswordForm session={session} />
            </Provider>
          </CardContent>
        </Card>
      </section>
    );
}
