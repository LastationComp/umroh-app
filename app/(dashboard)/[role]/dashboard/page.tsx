import { AuthOptions } from '@/app/api/auth/AuthOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

export default async function DashboardPage({ params }: { params: { role: string } }) {
  const session = await getServerSession(AuthOptions);
  return <section className="flex justify-center">Selamat Datang di Dashboard, {session?.user.name}!</section>;
}
