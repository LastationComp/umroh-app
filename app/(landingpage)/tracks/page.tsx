import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React, { Suspense } from "react";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import LoadingUI from "@/components/Suspense/Loading";
import Tracks from "./Tracks";

// const Tracks = dynamic(() => import("./Tracks"), {
//   loading: () => <LoadingUI />,
//   //   suspense: true
// });

export default function Page({
  searchParams,
}: {
  searchParams?: {
    q?: string;
  };
}) {
  const query = searchParams?.q;
  return (
    <Card className="p-3">
      <CardTitle>Lacak Pesanan</CardTitle>
      <CardDescription>
        Lacak menggunakan kode pesanan anda disini.
      </CardDescription>
      <CardContent className="grid gap-1.5 mt-3">
        <SearchBar />
        {query && (
          <h1 className="text-center uppercase font-bold">
            No. Pesanan : {searchParams?.q}
          </h1>
        )}
        <Suspense key={searchParams?.q} fallback={<LoadingUI />}>
          <div className="flex justify-between w-full">
            <Tracks q={searchParams?.q ?? ""} />
          </div>
        </Suspense>
        {!query && (
          <div className="w-full h-[400px] flex justify-center items-center">
            Mulai Lacak Pesanan...
          </div>
        )}
      </CardContent>
    </Card>
  );
}
