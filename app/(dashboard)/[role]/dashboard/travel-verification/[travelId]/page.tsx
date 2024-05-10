import React, { useContext } from "react";
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
