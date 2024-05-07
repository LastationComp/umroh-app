import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DateToString } from "@/lib/String/ParsingDate";
import Image from "next/image";
import React from "react";
import CarouselCredentials from "./CarouselCredentials";
import { Button } from "@/components/ui/button";

export default function TravelLegalityCard({ data }: { data: any[] }) {
  return (
    <section className="grid md:grid-cols-2 gap-5">
      {data.map((legality, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{legality.name}</CardTitle>
            <CardDescription>
              Nomor Legalitas : {legality.number}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-2">
                <span className="font-bold">Tanggal Dikeluarkan</span>
                <CardDescription>
                  {DateToString(legality.issued_date)}
                </CardDescription>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold">Dikeluarkan Oleh</span>
                <CardDescription>{legality.issued_by}</CardDescription>
              </div>
            </div>
            <section className="flex flex-col gap-3 my-3">
              <span className="font-bold">Kredensial</span>
              {/* <Carousel className="w-full ">
                <CarouselContent>
                  {legality.legality_credentials.map(
                    (travel_legality: any, index: number) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Image
                            alt={travel_legality.name}
                            width={500}
                            className="w-full max-h-50 object-cover"
                            height={1000}
                            quality={50}
                            src={travel_legality.credentials}
                          />
                        </div>
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel> */}
              <CarouselCredentials data={legality.legality_credentials} />
            </section>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
