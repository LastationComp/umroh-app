'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React, { useMemo } from 'react';
import { MdBackpack } from 'react-icons/md';
import { TbPoint } from 'react-icons/tb';
export default function Facilities({ fac = [] }: { fac: any[] }) {
  function isIncluded(data: any) {
    return Boolean(data?.is_included);
  }

  function isExcluded(data: any) {
    return !Boolean(data?.is_included);
  }

  return (
    <Card>
      <CardHeader>
        <span className="font-bold flex gap-3 items-center">
          <MdBackpack /> Facilities
        </span>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <span className="font-bold">Termasuk</span>
            <ul className="text-sm text-black/70">
              {fac.filter(isIncluded).map((facility: any, index: number) => (
                <li className="flex gap-3 items-center" key={index}>
                  <TbPoint />
                  {facility.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold">Tidak Termasuk</span>
            <ul className="text-sm text-black/70">
              {fac.filter(isExcluded).map((facility: any, index: number) => (
                <li className="flex gap-3 items-center" key={index}>
                  <TbPoint />
                  {facility.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
