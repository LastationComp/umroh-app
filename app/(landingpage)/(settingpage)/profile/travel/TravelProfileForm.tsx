"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { createRef, useState } from "react";
import avatar from "@/public/profile/avatar.png";
import { SelectMenu } from "@/components/utils/SelectMenu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TravelProfileForm({
  travelProfile,
  countries,
  provinces,
  cities,
}: {
  travelProfile: any;
  countries: any;
  provinces: any;
  cities: any;
}) {
  const [urlImage, setUrlImage] = useState("");
  const country = travelProfile.country;
  const province = travelProfile.province;
  const city = travelProfile.city;

  const fileImage = createRef<HTMLInputElement>();
  const handleClick = (e: any) => {
    fileImage.current?.click();
  };
  const handleImage = (e: any) => {
    if (!e.target.files[0]) return;
    const image = URL.createObjectURL(e.target.files[0]);
    setUrlImage(image ?? "");
  };
  return (
    <form
      action=""
      method="post"
      className="flex gap-3 md:divide-x w-auto max-md:flex-col max-md:flex-col-reverse"
    >
      <div className="grid gap-3 w-full">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="name">Nama Travel</Label>
          <Input
            id="name"
            type={"text"}
            placeholder="Masukkan Email anda..."
            defaultValue={travelProfile.name}
          />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="description">Deskripsi</Label>
          <Textarea
            id="description"
            className="resize-none"
            placeholder="Deskripsikan tentang travel anda..."
            rows={4}
            defaultValue={travelProfile.description}
          />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type={"email"}
            placeholder="Masukkan Email anda..."
            defaultValue={travelProfile.email}
          />
        </div>
        <div className="grid items-center gap-1.5">
          <span className="text-sm">Negara</span>
          <Select name="country" defaultValue={country.id}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={"Pilih Negara"} />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country: any, index: number) => (
                <SelectItem
                  key={index}
                  value={country.id}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{country.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid items-center gap-1.5">
          <span className="text-sm">Provinsi</span>
          <Select name="province" defaultValue={province.id}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Provinsi" />
            </SelectTrigger>
            <SelectContent>
              {provinces.map((province: any, index: number) => (
                <SelectItem key={index} value={province.id}>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{province.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid items-center gap-1.5">
          <span className="text-sm">Kota</span>
          <Select name="city" defaultValue={city.id}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Kota" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city: any, index: any) => (
                <SelectItem key={index} value={city.id}>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{city.city_name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="postal_code">Kode Pos</Label>
          <Input
            id="postal_code"
            type={"number"}
            placeholder="Masukkan Kode Pos..."
            defaultValue={travelProfile.postal_code}
          />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="address">Alamat</Label>
          <Textarea
            id="address"
            className="resize-none"
            placeholder="Masukkan deskripsi disini..."
            rows={4}
            defaultValue={travelProfile.address}
          />
        </div>
        <div>
          <Button type={"submit"}>Simpan</Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-3 w-full">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={urlImage === "" ? avatar : urlImage}
            className="w-[10rem] object-cover rounded-full cursor-pointer"
            width={1024}
            height={1024}
            alt="My Profile"
            onClick={handleClick}
          />
          <input
            type="file"
            ref={fileImage}
            onChange={handleImage}
            className="hidden"
            name="image"
            id="image"
          />
          <Button type={"button"} variant={"outline"} onClick={handleClick}>
            Pilih Gambar
          </Button>
          <span className="text-sm text-black/60">Ukuran Maks. : 1MB</span>
          <span className="text-sm text-black/60">
            Format Gambar : .jpg, .png
          </span>
        </div>
      </div>
    </form>
  );
}
