"use client";
import DepartingInput from "@/components/packet/DepartingInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

export default function DepartingForm({
  departings,
  cities,
}: {
  departings: any[];
  cities: any[];
}) {
  const [departingData, setDepartingData] = useState(
    departings.length === 0 ? [{}] : departings
  );

  const [selectedCity, setSelectedCity] = useState([]);

  const filteringSameCities = (city: any) => {
    return;
  };

  const addDeparting = () => {
    let data: any[] = [...departingData];
    data.push({});
    setDepartingData(data);
  };

  const removeDeparting = () => {
    let data: any[] = [...departingData];
    data.pop();
    setDepartingData(data);
  };
  return (
    <section className="grid gap-3 w-1/2 mb-3">
      {departingData.map((departing: any, index: number) => (
        <div key={index} className="flex gap-3 items-center justify-between">
          <div className="grid gap-1.5 w-full">
            <Label htmlFor="cities">Kota Keberangkatan</Label>
            <Select name="cities_id[]" defaultValue={departing.id ?? ""}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Kota" />
              </SelectTrigger>
              <SelectContent id="cities">
                <SelectGroup>
                  <SelectLabel>Pilih Kota</SelectLabel>
                  {cities.map((city, index) => (
                    <SelectItem key={index} value={city.id}>
                      {city.city_name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-1.5 w-full">
            <Label htmlFor="price_departing">Harga</Label>
            <Input
              id="price_departing"
              name="price_departing[]"
              type="number"
              defaultValue={departing?.pivot.price ?? 0}
              placeholder="Masukkan Harga Keberangkatan"
            />
          </div>
        </div>
      ))}
      {cities.length !== 1 && (
        <div className="flex gap-1.5 items-center">
          <Button type="button" onClick={addDeparting}>
            Tambah
          </Button>
          <Button
            type="button"
            onClick={removeDeparting}
            variant={"destructive"}
          >
            Hapus
          </Button>
        </div>
      )}
    </section>
  );
}
