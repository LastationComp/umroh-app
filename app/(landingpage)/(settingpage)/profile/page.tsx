import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { getProfileData } from '../action';
import SubmitButton from '@/components/builder/SubmitButton';
import ProfileForm from './profileForm';

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
