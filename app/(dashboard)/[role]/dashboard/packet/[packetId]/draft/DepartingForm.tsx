"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
    <section className="grid gap-3 md:w-1/2 mb-3">
      <div className="flex gap-3 items-center justify-between">
        <span className="w-full">Kota Keberangkatan</span>
        <span className="w-full">Harga</span>
      </div>
      {departingData.map((departing: any, index: number) => (
        <Card className="rounded-sm p-3" key={index}>
          <div key={index} className="flex gap-3 items-center justify-between">
            <div className="grid gap-1.5 w-full">
              <Select
                name="cities_id[]"
                required
                defaultValue={departing.id ?? ""}
              >
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
              <Input
                id="price_departing"
                name="price_departing[]"
                type="number"
                required
                defaultValue={Number(departing?.pivot?.price ?? 0)}
                placeholder="Masukkan Harga Keberangkatan"
              />
            </div>
          </div>
        </Card>
      ))}
      <div className="flex gap-1.5 items-center">
        {cities.length !== 1 && cities.length !== departingData.length && (
          <Button type="button" onClick={addDeparting}>
            Tambah
          </Button>
        )}
        {departingData.length !== 1 && (
          <Button
            type="button"
            onClick={removeDeparting}
            variant={"destructive"}
          >
            Hapus
          </Button>
        )}
      </div>
    </section>
  );
}
