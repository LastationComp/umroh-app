import React from 'react';
import SearchContent from './SearchContent';

async function getPaketUmroh() {
  const res = await fetch(process.env.URL_API + '/paket_umroh');
  return res.json();
}

export default async function Search() {
  const data = await getPaketUmroh();
  return <SearchContent data={data} />;
}
