'use client';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import CountryForm from './CountryForm';
import CountryTable from './CountryTable';

export default function CountriesPage() {
  const [open, setOpen] = useState(false);

  const handleOpenFormAdd = () => {
    setOpen(!open);
  };
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="font-bold">Data Negara</span>
        <Button className="flex items-center gap-3" onClick={handleOpenFormAdd}>
          <IoAddOutline />
          Tambah Data
        </Button>
      </div>
      <CountryForm open={open} onOpenChange={setOpen} />
      <CountryTable />
    </section>
  );
}
