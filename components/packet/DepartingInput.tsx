"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fetcher } from "@/lib/Fetcher";
import React, { useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import useSWR from "swr";

export default function DepartingInput() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const { data: cities } = useSWR("/api/data/cities?q=" + search, fetcher, {
    keepPreviousData: true,
  });
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {city
            ? cities.find((cityOne: any) => cityOne.id === city).city_name
            : city}

          <HiChevronUpDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command onValueChange={setCity} >
          <CommandInput
            name="price_departing[]"
            placeholder="Search framework..."
          />
          <CommandList>
            <CommandEmpty>Tidak Ada Kota yang ditemukan</CommandEmpty>
            <CommandGroup>
              {cities &&
                cities.map((cityOne: any, index: number) => (
                  <CommandItem
                    key={index}
                    value={cityOne.id}
                    onSelect={(currentValue) => {
                      setCity(currentValue === city ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {cityOne.city_name}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
