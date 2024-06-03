import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Verification from "./verification";
import { checkTravel, getTravelState } from "../action";
import { redirect } from "next/navigation";
import { SAlert } from "@/components/context/ShadAlert";
import Provider from "@/components/Provider";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/api/auth/AuthOptions";

export default async function page() {
  const checkRegistered = await checkTravel();
  const travel = await getTravelState();
  const session = await getServerSession(AuthOptions);
  if (checkRegistered === true) return redirect("/daftar/travel");
  return (
    <section className="">
      <Card>
        <CardHeader>
          <CardTitle>Verifikasi Travel</CardTitle>
        </CardHeader>
        <CardContent>
          <SAlert>
            <Provider session={session}>
              <Verification state={travel?.state ?? 0} />
            </Provider>
          </SAlert>
        </CardContent>
      </Card>
    </section>
  );
}
