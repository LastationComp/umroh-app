
import React, { createRef, useRef, useState } from 'react';
import { Separator } from '@/components/ui/separator';

import AccountForm from './AccountForm';
import { getAccountData } from '../../action';
export default async function AccountPage() {
  
  const accountData = await getAccountData()
  return (
    <section className="flex flex-col gap-3">
      <span className="font-bold">Akun Saya</span>
      <Separator />
      <AccountForm data={accountData} />
    </section>
  );
}
