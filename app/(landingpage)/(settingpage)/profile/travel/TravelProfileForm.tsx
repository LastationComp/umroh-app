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

export default function TravelProfileForm() {
  const [urlImage, setUrlImage] = useState("");
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
          <Input id="name" type={"text"} placeholder="Masukkan Email anda..." />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="description">Deskripsi</Label>
          <Textarea
            id="description"
            className="resize-none"
            placeholder="Deskripsikan tentang travel anda..."
            rows={4}
          />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type={"email"}
            placeholder="Masukkan Email anda..."
          />
        </div>
        <div className="grid items-center gap-1.5">
          <span className="text-sm">Negara</span>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Negara" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indonesia">Indonesia</SelectItem>
              <SelectItem value="malaysia">Malaysia</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid items-center gap-1.5">
          <span className="text-sm">Provinsi</span>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Provinsi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jawatimur">Jawa Timur</SelectItem>
              <SelectItem value="jawabarat">Jawa Barat</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid items-center gap-1.5">
          <span className="text-sm">Kota</span>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Kota" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="babat">Babat</SelectItem>
              <SelectItem value="lamongan">Lamongan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="postal_code">Kode Pos</Label>
          <Input
            id="postal_code"
            type={"number"}
            placeholder="Masukkan Kode Pos..."
          />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="address">Alamat</Label>
          <Textarea
            id="address"
            className="resize-none"
            placeholder="Masukkan deskripsi disini..."
            rows={4}
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
