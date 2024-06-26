import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DateToString } from "@/lib/String/ParsingDate";
import React, { useContext } from "react";
import CarouselCredentials from "./CarouselCredentials";

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
              <CarouselCredentials data={legality.legality_credentials} />
            </section>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
