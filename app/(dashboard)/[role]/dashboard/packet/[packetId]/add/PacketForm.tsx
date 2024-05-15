"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { fetcher } from "@/lib/Fetcher";
import { Slug } from "@/lib/String/Packet";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import useSWR from "swr";
import { RiDraftLine } from "react-icons/ri";
import { ScrollArea } from "@/components/ui/scroll-area";
import { initialMessage } from "@/lib/utils";
import { draftPacket } from "../../action";
import Alert from "@/components/callback/Alert";
import SubmitButton from "@/components/builder/SubmitButton";
export default function PacketForm({
  packet,
  packetId,
  packetGalleries,
  packetFacilities,
  packetDeparting,
}: {
  packet: any;
  packetId: string;
  packetGalleries: React.ReactNode;
  packetFacilities: React.ReactNode;
  packetDeparting: React.ReactNode;
}) {
  const [state, setState]: any = useState(initialMessage);
  const [slug, setSlug] = useState("");
  const [cities, setCities] = useState("");
  const onSlug = (string: string) => {
    setSlug(Slug(string));
  };

  const { data: categories } = useSWR(
    "/api/dashboard/packets/categories",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const handleSubmit = async (formData: FormData) => {
    const result = await draftPacket(packetId, formData);
    // if (!result.success) console.log(result);
    setState(result);
  };
  return (
    <CardContent>
      <form action={handleSubmit}>
        <div className="mb-3">
          {state.message && (
            <Alert variant={state?.type ?? "error"} message={state.message} />
          )}
        </div>

        <ScrollArea className="h-[600px]">
          <section className="grid md:grid-cols-2 gap-5 mx-1">
            <div className="grid gap-1.5">
              <Label htmlFor="title">Nama Paket</Label>
              <Input
                id="title"
                type="text"
                name="title"
                defaultValue={packet.title ?? ""}
                placeholder="Masukkan Nama Paket Disini..."
                onChange={(e) => onSlug(e.target.value)}
              />
              <Input
                type="hidden"
                name="slug"
                value={slug === "" ? packet.slug : slug}
              />
              <CardDescription>
                Slug : {slug === "" ? packet.slug : slug}
              </CardDescription>
            </div>
            <div className="grid gap-1.5 mb-auto">
              <Label htmlFor="quota">Kuota Paket</Label>
              <Input
                id="quota"
                type="number"
                placeholder="Masukkan Kuota Paket Disini..."
                name="quota"
                defaultValue={packet.quota ?? 0}
              />
            </div>
            <div className="grid gap-1.5 mb-auto">
              <Label htmlFor="departure_time">Waktu Keberangkatan</Label>
              <Input
                id="departure_time"
                name="departure_time"
                defaultValue={packet.departure_time ?? new Date()}
                type="date"
              />
            </div>
            <div className="grid gap-1.5 mb-auto relative">
              <Label htmlFor="category">Kategori Paket</Label>
              <Select
                name="category_id"
                defaultValue={packet?.category.id ?? ""}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kategori" />
                </SelectTrigger>
                <SelectContent id="category">
                  {categories &&
                    categories.map((category: any, index: number) => (
                      <SelectItem value={category.id} key={index}>
                        {category.category_name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5 mb-auto relative">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                defaultValue={packet.description}
                placeholder="Masukkan Deskripsi Paket Kamu..."
                rows={4}
              ></Textarea>
            </div>
          </section>
          <section className="mt-5 mx-1">
            <CardTitle>Detail</CardTitle>
            <div className="grid md:grid-cols-2 gap-5 mt-5">
              <section className="md:col-span-2">
                <span>Gambar Paket</span>
                {packetGalleries}
              </section>
              <section className="md:col-span-2">
                <span>Fasilitas</span>
                {packetFacilities}
              </section>
              <section className="md:col-span-2">
                {packetDeparting}
              </section>
            </div>
          </section>
        </ScrollArea>
        <section className="flex justify-between items-center mt-5 gap-5 mb-3">
          <Button variant={"outline"} type="button" asChild>
            <Link href={"/travel/dashboard/packet"}>Kembali</Link>
          </Button>
          <div className="flex items-center gap-3">
            <SubmitButton variant={"default"}>
              <span className="max-md:hidden">Simpan Draft</span>
              <RiDraftLine />
            </SubmitButton>
            <Button type="button" variant={"secondary"}>
              Batal
            </Button>
          </div>
        </section>
      </form>
    </CardContent>
  );
}
