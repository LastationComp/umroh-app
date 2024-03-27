import React from 'react';
import PartnerContent from './PartnerContent';

async function getPartner() {
  const res = await fetch('https://umroh-ai-dummy-api-production.up.railway.app/patner', { cache: 'no-store' });
  return res.json()
}
export default async function Partner() {
  const data = await getPartner();
  return <PartnerContent data={data} />;
}
