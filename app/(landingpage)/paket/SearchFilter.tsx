'use client';
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import LowerCase from '@/lib/String/LowerCase';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import nProgress from 'nprogress';
import { getMonthString } from '@/lib/String/ParsingDate';

const dateDeparture = getMonthString(6);
export default function SearchFilter({ data, params }: { data?: any; params: any }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleCategory = (val: string) => {
    nProgress.start();
    const params = new URLSearchParams(searchParams);

    params.set('cat', val);
    if (!val) params.delete('cat');

    return replace(pathname + '?' + params);
  };

  const handleLocation = (val: string) => {
    nProgress.start();
    const params = new URLSearchParams(searchParams);

    params.set('loc', val);
    if (!val) params.delete('loc');

    return replace(pathname + '?' + params);
  };

  const handleDepartureTime = (val: string) => {
    nProgress.start();
    const params = new URLSearchParams(searchParams);

    params.set('depart', val);
    if (!val) params.delete('depart');

    return replace(pathname + '?' + params);
  };

  const handlePrice = (val: string) => {
    nProgress.start();
    const params = new URLSearchParams(searchParams);

    params.set('price', val);
    if (!val) params.delete('price');

    return replace(pathname + '?' + params);
  };

  const handleReset = () => {
    nProgress.start();
    const params = new URLSearchParams(searchParams);

    params.delete('price');
    params.delete('depart');
    params.delete('loc');
    params.delete('cat');

    return replace(pathname + '?' + params);
  };

  return (
    <div className="flex flex-col gap-3 mt-3">
      <span>Kategori</span>
      <ToggleGroup type="single" value={params.cat ?? ''} className="flex flex-col p-1 gap-3" onValueChange={handleCategory}>
        {data?.categories.map((category: any, index: number) => (
          <ToggleGroupItem key={index} value={String(category).toLowerCase()} className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
            {category}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Separator />
      <span>Lokasi Keberangkatan</span>
      <Select onValueChange={handleLocation} value={params.loc ?? ''}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Lokasi Keberangkatan" />
        </SelectTrigger>
        <SelectContent>
          {data?.locations.map((location: any, index: number) => (
            <SelectGroup key={index}>
              <SelectLabel>{location.name}</SelectLabel>
              {location?.cities.map((city: any, index: number) => (
                <SelectItem value={LowerCase(city.city_name)} key={index}>
                  {city.city_name}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
      <Separator />
      <span>Waktu Keberangkatan</span>
      <Select onValueChange={handleDepartureTime} value={params.depart ?? ''}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Waktu Keberangkatan" />
        </SelectTrigger>
        <SelectContent>
          {dateDeparture.map((departure: any, index: number) => (
            <SelectItem value={departure.value} key={index}>
              {departure.display}
            </SelectItem>
          ))}
          {/* <SelectItem value="april-2024">April-2024</SelectItem> */}
        </SelectContent>
      </Select>
      <Separator />
      <span>Biaya Umroh/Haji</span>
      <ToggleGroup type="single" className="flex flex-col p-1 gap-3" onValueChange={handlePrice} value={params.price ?? ''}>
        <ToggleGroupItem value="un30" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
          {'< 30jt'}
        </ToggleGroupItem>
        <ToggleGroupItem value="30-40" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
          {'30jt - 40jt'}
        </ToggleGroupItem>
        <ToggleGroupItem value="up40" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
          {'> 40jt'}
        </ToggleGroupItem>
      </ToggleGroup>
      <Button variant={'outline'} onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
}
