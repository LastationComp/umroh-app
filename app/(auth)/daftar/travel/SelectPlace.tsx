'use client';
import LoadingUI from '@/components/Suspense/Loading';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fetcher } from '@/lib/Fetcher';
import React, { useState } from 'react';
import useSWR from 'swr';

export default function SelectPlace() {
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');

  const { data: countries } = useSWR('/api/data/countries', fetcher);
  const { data: provinces } = useSWR(`/api/data/provinces?country=${country}`, fetcher);
  const { data: cities } = useSWR(`/api/data/cities?country=${country}&province=${province}`, fetcher);

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div>
        <Label htmlFor="country">Negara</Label>
        {!countries && <LoadingUI />}
        {countries && (
          <Select value={country} name="country_id" onValueChange={setCountry} required>
            <SelectTrigger>
              <SelectValue placeholder={'Pilih Negara'} />
            </SelectTrigger>
            <SelectContent>
              {countries &&
                countries.map((country: any, index: number) => (
                  <SelectItem key={index} value={country.id}>
                    {country.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        )}
      </div>
      <div>
        <Label htmlFor="province">Provinsi</Label>
        {!provinces && <LoadingUI />}
        {provinces && (
          <Select value={province} name="province_id" onValueChange={setProvince} required>
            <SelectTrigger>
              <SelectValue placeholder={'Pilih Provinsi'} />
            </SelectTrigger>
            <SelectContent id="province">
              {provinces &&
                provinces.map((province: any, index: number) => (
                  <SelectItem key={index} value={province.id}>
                    {province.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        )}
      </div>
      <div>
        <Label htmlFor="city">Kota</Label>
        {!cities && <LoadingUI />}
        {cities && (
          <Select value={city} name="city_id" onValueChange={setCity} required>
            <SelectTrigger>
              <SelectValue placeholder={'Pilih Kota'} />
            </SelectTrigger>
            <SelectContent id="city">
              {cities &&
                cities.map((city: any, index: number) => (
                  <SelectItem key={index} value={city.id}>
                    {city.city_name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </section>
  );
}
