'use client';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
export default function SearchFilter() {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <span>Kategori</span>
      <ToggleGroup type="single" className="flex flex-col p-1 gap-3">
        <ToggleGroupItem value="a" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
          Umroh
        </ToggleGroupItem>
        <ToggleGroupItem value="b" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
          Haji
        </ToggleGroupItem>
      </ToggleGroup>
      <Separator />
      <span>Lokasi Keberangkatan</span>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pilih Lokasi Keberangkatan" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Jawa Timur</SelectLabel>
            <SelectItem value="surabaya">Surabaya</SelectItem>
            <SelectItem value="lamongan">Lamongan</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Sumatera Utara</SelectLabel>
            <SelectItem value="medan">Medan</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Separator />
      <span>Waktu Keberangkatan</span>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pilih Waktu Keberangkatan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="maret-2024">Maret-2024</SelectItem>
          <SelectItem value="april-2024">April-2024</SelectItem>
        </SelectContent>
      </Select>
      <Separator />
      <span>Biaya Umroh/Haji</span>
      <ToggleGroup type="single" className="flex flex-col p-1 gap-3">
        <ToggleGroupItem value="<30jt" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
          {'< 30jt'}
        </ToggleGroupItem>
        <ToggleGroupItem value="30-40jt" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
          {'30jt - 40jt'}
        </ToggleGroupItem>
        <ToggleGroupItem value=">40jt" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
          {'> 40jt'}
        </ToggleGroupItem>
      </ToggleGroup>
      <Button variant={'outline'}>Reset</Button>
    </div>
  );
}
