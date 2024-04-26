'use client';
import { fetcher } from '@/lib/Fetcher';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import GetIconFacilities from './GetIconFacilities';
import LoadingUI from '../Suspense/Loading';

export default function HotelFacilities({ value = [] }: { value?: string[] }) {
  const { data } = useSWR('/api/dashboard/facilities', fetcher);

  const [facilitiesData, setFacilitiesData]: any = useState([]);

  useEffect(() => {
    if (value) {
      value.forEach((val: any) => {
        setFacilitiesData((prev: any) => [...prev, val.id]);
      });
    }
  }, []);
  return (
    <section className="">
      {!data && <LoadingUI />}
      <ToggleGroup type={'multiple'} variant={'outline'} value={facilitiesData} onValueChange={(val: string[]) => setFacilitiesData(val)} className="p-1 gap-2 flex justify-start gap-3 flex-wrap max-w-lg w-full">
        {data?.data.map((icon: any, index: number) => {
          return (
            <ToggleGroupItem key={index} className="data-[state=on]:outline data-[state=on]:outline-blue-dark data-[state=on]:outline-2" value={icon.id} aria-label="Toggle bold">
              <section className="flex gap-3 items-center">
                <GetIconFacilities name={icon.icon} />
                {icon.name}
              </section>
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
      {facilitiesData.map((facility: string, index: number) => (
        <input type="hidden" key={index} name="hotel_facilities[]" value={facility} />
      ))}
    </section>
  );
}
