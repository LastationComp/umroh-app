'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import MultiCredentials from './MultiCredentials';
import { Button } from '@/components/ui/button';
import { FaTrash } from 'react-icons/fa';

export default function LegalityForm() {
  const [legalities, setLegalities]: any = useState([1]);

  const remove = (index: number) => {
    const legality = [...legalities];
    const final = legality.filter((legality) => legality !== index);
    setLegalities(final);
  };

  const add = () => {
    const index = legalities[legalities.length - 1];
    setLegalities([...legalities, index + 1]);
  };
  return (
    <section className="grid md:grid-cols-2 gap-3">
      {legalities.map((legality: any, index: number) => (
        <Card key={index}>
          <CardHeader className="font-bold">
            <div className="flex justify-between">
              <span>Legalitas Travel {index + 1}</span>
              {index !== 0 && (
                <Button variant={'destructive'} type="button" onClick={() => remove(legality)}>
                  <FaTrash />
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor={'legality_name-' + index}>Nama Legalitas</Label>
              <Input id={'legality_name-' + index} name="legality_name[]" placeholder="Masukkan disini..." required />
            </div>
            <div>
              <Label htmlFor={'legality_number-' + index}>Nomor Legalitas</Label>
              <Input id={'legality_number-' + index} type="text" placeholder="Masukkan disini..." name="legality_number[]" required />
            </div>
            <div>
              <Label htmlFor={'legality_issued_by-' + index}>Dikeluarkan Oleh</Label>
              <Input id={'legality_issued_by-' + index} placeholder="Masukkan disini..." name="legality_issued_by[]" required />
            </div>
            <div>
              <Label htmlFor={'legality_issued_date-' + index}>Dikeluarkan Pada</Label>
              <Input id={'legality_issued_date-' + index} placeholder="Masukkan disini..." name="legality_issued_date[]" type="date" required />
            </div>
            <div className="col-span-2">
              <MultiCredentials indexCredentials={index} />
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="place-self-center self-start">
        <Card className="h-full w-full flex justify-center items-center p-3">
          <Button type="button" onClick={() => add()}>
            Tambah Legalitas
          </Button>
        </Card>
      </div>
    </section>
  );
}
