'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { arrayReducer } from '@/lib/Handling/reducer';
import React, { useReducer, useState } from 'react';
import { NumericFormat } from 'react-number-format';

export default function DepartingForm({ departings, cities }: { departings: any[]; cities: any[] }) {
  const [departingData, dispatch] = useReducer(arrayReducer, departings.length === 0 ? [{}] : departings);

  const addDeparting = () => {
    dispatch({ type: 'add' });
  };

  const removeDeparting = () => {
    dispatch({ type: 'remove' });
  };
  return (
    <section className="grid gap-3 md:w-1/2 mb-3">
      <div className="flex gap-3 items-center justify-between">
        <span className="w-full">Kota Keberangkatan</span>
        <span className="w-full">Harga</span>
      </div>
      {departingData &&
        departingData.map((departing: any, index: number) => (
          <Card className="rounded-sm p-3 relative" key={index}>
            <div key={index} className="flex gap-3 items-center justify-between">
              <div className="grid gap-1.5 w-full">
                <Select name="cities_id[]" defaultValue={departing.id}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Kota" />
                  </SelectTrigger>
                  <SelectContent id="cities">
                    {cities.map((city, index) => (
                      <SelectItem key={index} value={city.id}>
                        {city.city_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5 w-full">
                <NumericFormat
                  customInput={Input}
                  id="price_departing"
                  allowLeadingZeros={false}
                  valueIsNumericString={true}
                  placeholder="Masukkan Harga Keberangkatan..."
                  defaultValue={Number(departing?.pivot?.price ?? 0)}
                  name="price_departing[]"
                  decimalSeparator=","
                  thousandSeparator="."
                />
              </div>
            </div>
          </Card>
        ))}
      <div className="flex gap-1.5 items-center">
        {cities.length !== 1 && cities.length !== departingData?.length && (
          <Button type="button" onClick={addDeparting}>
            Tambah
          </Button>
        )}
        {(departingData?.length ?? 0) > 1 && (
          <Button type="button" onClick={removeDeparting} variant={'destructive'}>
            Hapus
          </Button>
        )}
      </div>
    </section>
  );
}
