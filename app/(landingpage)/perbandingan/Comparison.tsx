import React from 'react';
import ComparisonCarts from './ComparisonCarts';

async function getPaketUmroh() {
  const res = await fetch('https://umroh-ai-dummy-api-production.up.railway.app/paket_umroh', { cache: 'no-store' });
  return res.json();
}

export default async function Comparison() {
  const data = await getPaketUmroh();
  return <ComparisonCarts paket_umroh={data} />;
}
