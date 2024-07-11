import { getUserRole } from '@/app/_actions/Authentication';
import React from 'react';

export default async function SubscriberContent() {
  const role = await getUserRole();
  return <div>{role}</div>;
}
