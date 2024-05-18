import React from 'react';
import PartnerContent from './PartnerContent';

async function getPartner() {
  const res = await fetch(process.env.URL_API + '/patner');
  return res.json();
}
export default async function Partner() {
  const data = await getPartner();
  return <PartnerContent data={data} />;
}
