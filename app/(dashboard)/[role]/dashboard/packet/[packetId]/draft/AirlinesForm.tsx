'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useReducer, useState } from 'react';
import { NumericFormat } from 'react-number-format';

function airlineReducer(state: any, action: any) {
  switch (action.type) {
    case 'add': {
      return [...state, action?.data ?? {}];
    }
    case 'remove': {
      let array = [...state];
      array.pop();
      return array;
    }
  }
}

export default function AirlinesForm({ airlines, data = [] }: { airlines: any[]; data?: any[] }) {
  const [airlinesData, dispatch] = useReducer(airlineReducer, data.length === 0 ? [{}] : data);
  return (
    <section className="grid gap-1.5 w-full">
      {airlinesData?.map((airline: any, index: number) => (
        <Card className="p-1.5 rounded-sm" key={index}>
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="grid gap-1.5 w-full">
              <Select name="airlines_id[]" defaultValue={airline.id}>
                <SelectTrigger>
                  <SelectValue placeholder={'Pilih Penerbangan'} />
                </SelectTrigger>
                <SelectContent>
                  {airlines.map((airline, index) => (
                    <SelectItem key={index} value={airline.id} className="cursor-pointer">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">{airline.airline_name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <NumericFormat
              customInput={Input}
              id="price_departing"
              allowLeadingZeros={false}
              valueIsNumericString={true}
              placeholder="Masukkan harga..."
              defaultValue={Number(airline?.pivot?.price ?? 0)}
              name="price_airline[]"
              decimalSeparator=","
              thousandSeparator="."
            />
          </div>
        </Card>
      ))}

      <div className="flex gap-1.5">
        {airlinesData && airlinesData.length !== airlines.length && (
          <Button type="button" onClick={() => dispatch({ type: 'add' })}>
            Tambah
          </Button>
        )}
        {airlinesData && airlinesData.length > 1 && (
          <Button type="button" variant={'destructive'} onClick={() => dispatch({ type: 'remove' })}>
            Hapus
          </Button>
        )}
      </div>
    </section>
  );
}
