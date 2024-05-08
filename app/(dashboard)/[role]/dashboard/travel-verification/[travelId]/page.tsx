import React, { useContext } from "react";
import FormBuilder from "@/components/builder/FormBuilder";
// import ProvinceTable from './ProvinceTable';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { GetTravel } from "./action";
import SAlertContext, { SAlert } from "@/components/context/ShadAlert";
import TravelDetail from "./TravelDetail";

export default async function TravelVerificationPage({
  params,
}: {
  params: { travelId: string };
}) {
  const travel = await GetTravel(params.travelId);

  return (
    <SAlert>
      <TravelDetail travel={travel} />
    </SAlert>
  );
}
