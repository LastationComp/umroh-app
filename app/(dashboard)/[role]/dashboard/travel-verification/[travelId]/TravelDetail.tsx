"use client";
import React, { useContext } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import TravelLegalityCard from "./TravelLegalityCard";
import { Button } from "@/components/ui/button";
import SAlertContext, { SAlert } from "@/components/context/ShadAlert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cancelTravel } from "./action";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function TravelDetail({ travel }: { travel: any }) {
  const SAlert = useContext(SAlertContext);
  const { toast } = useToast();
  const router = useRouter();
  const cancel = () => {
    SAlert.trigger({
      title: "Apakah Kamu Yakin Ingin Menolak?",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      icon: "error",
      onSuccess: async () => {
        const result = await cancelTravel(travel.id);
        if (result.success) {
          router.refresh();
          return toast({
            title: "Berhasil Ditolak",
          });
        }
      },
    });
  };
  return (
    <section className="flex items-center">
      <Card className="w-full">
        <CardHeader className="flex gap-3">
          <CardTitle>Travel Detail</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px]">
            <div className="flex items-center gap-3">
              {travel.logo && (
                <Image
                  alt={travel.name}
                  width={100}
                  height={100}
                  src={travel.logo}
                />
              )}
              <span className="text-lg font-bold">
                {travel?.name ?? "Unknown"}
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              <div className="flex flex-col">
                <span className="text-black/80">Email</span>
                <span className="text-black/50">{travel.email}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-black/80">Nomor Telepon</span>
                <span className="text-black/50">{travel.no_telp}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-black/80">Website</span>
                {travel.website && (
                  <Link
                    className="text-black/50 hover:underline"
                    href={"https://" + travel.website}
                    target="_blank"
                  >
                    {travel.website}
                  </Link>
                )}
                {!travel.website && <span className="text-black/50">-</span>}
              </div>
              <div className="flex flex-col">
                <span className="text-black/80">Kode Pos</span>
                <span className="text-black/50">{travel.postal_code}</span>
              </div>
            </div>
            <div className="my-3">
              <span className="font-bold">Lokasi Perusahaaan</span>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <div className="flex flex-col">
                  <span className="text-black/80">Negara</span>
                  <span className="text-black/50">{travel.country.name}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black/80">Provinsi</span>
                  <span className="text-black/50">{travel.province.name}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black/80">Kota</span>
                  <span className="text-black/50">{travel.city.city_name}</span>
                </div>
              </div>
            </div>
            <div className="font-bold">
              <span>Legalitas</span>
            </div>
            <TravelLegalityCard data={travel.travel_legalities} />
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex justify-end">
          <div className="flex items-center gap-3">
            <Button>Setujui</Button>
            <Button variant={"destructive"} onClick={cancel}>
              Tolak
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
