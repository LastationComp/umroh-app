import React from 'react';
import SearchContent from './SearchContent';

async function getPaketUmroh() {
  const res = await fetch('https://umroh-ai-dummy-api-production.up.railway.app/paket_umroh', { cache: 'no-store' });
  return res.json();
}

export default async function Search() {
  const data = await getPaketUmroh();
  return <SearchContent data={data} />;
}
