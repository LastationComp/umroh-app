import { Separator } from '@/components/ui/separator';
import React from 'react';
import { getProfileData } from '../action';
// import ProfileForm from './profileForm';
import dynamic from 'next/dynamic';
import LoadingUI from '@/components/Suspense/Loading';

const ProfileForm = dynamic(() => import('./profileForm'), { loading: () => <LoadingUI /> });
export default async function ProfilePage() {
  const profileData = await getProfileData();
  return (
    <section className="flex flex-col gap-3">
      <span className="font-bold">Profil Saya {!profileData && 'kosong'}</span>
      <Separator />
      <ProfileForm data={profileData} />
    </section>
  );
}
