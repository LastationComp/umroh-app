'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HiChevronUpDown } from 'react-icons/hi2';
import { IoMdCheckmark, IoIosSearch } from 'react-icons/io';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];
export default function MainContent() {
  const [openLocation, setOpenLocation] = useState(false);
  const [locationValue, setLocationValue] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [dateValue, setDateValue] = useState('');
  const [openPrice, setOpenPrice] = useState(false);
  const [priceValue, setPriceValue] = useState('');
  return (
    <section className="container mx-auto">
      <Card className="p-3">
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-3">
          {/* <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant={'outline'}>Lokasi Berangkat</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Jakarta</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
          <div className="flex gap-3 max-lg:flex-col">
            <div className="flex flex-col">
              <span>Lokasi Keberangkatan</span>
              <Popover open={openLocation} onOpenChange={setOpenLocation}>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" aria-expanded={openLocation} className="w-auto xl:w-[300px] justify-between">
                    {locationValue ? frameworks.find((framework) => framework.value === locationValue)?.label : 'Lokasi Keberangkatan...'}
                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Lokasi Keberangkatan..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            className="flex justify-between"
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setLocationValue(currentValue === locationValue ? '' : currentValue);
                              setOpenLocation(false);
                            }}
                          >
                            {framework.label}
                            {locationValue === framework.value && <IoMdCheckmark />}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col">
              <span>Waktu Keberangkatan</span>
              <Popover open={openDate} onOpenChange={setOpenDate}>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" aria-expanded={openDate} className="w-auto xl:w-[300px] justify-between">
                    {dateValue ? frameworks.find((framework) => framework.value === dateValue)?.label : 'Waktu Keberangkatan...'}
                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Waktu Keberangkatan..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            className="flex justify-between"
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setDateValue(currentValue === dateValue ? '' : currentValue);
                              setOpenDate(false);
                            }}
                          >
                            {framework.label}
                            {dateValue === framework.value && <IoMdCheckmark />}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col">
              <span>Biaya Umroh</span>
              <Popover open={openPrice} onOpenChange={setOpenPrice}>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" aria-expanded={openPrice} className="w-auto xl:w-[300px] justify-between">
                    {priceValue ? frameworks.find((framework) => framework.value === priceValue)?.label : 'Biaya Umroh...'}
                    <HiChevronUpDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto xl:w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Biaya Umroh..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            className="flex justify-between"
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setPriceValue(currentValue === priceValue ? '' : currentValue);
                              setOpenPrice(false);
                            }}
                          >
                            {framework.label}
                            {priceValue === framework.value && <IoMdCheckmark />}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button className="flex gap-3">
            <IoIosSearch /> Cari Paket Umroh
          </Button>
        </div>
      </Card>
    </section>
  );
}
