import React, { Suspense } from "react";
import SearchEngine from "./SearchEngine";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SearchFilter from "./SearchFilter";
import { Button } from "@/components/ui/button";
import SearchOrder from "./SearchOrder";
// import SearchContent from './SearchContent';
import LoadingSkeleton from "@/components/Suspense/LoadingSkeleton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiFilter } from "react-icons/fi";
import dynamic from "next/dynamic";

const SearchContent = dynamic(() => import("./SearchContent"), {
  loading: () => <LoadingSkeleton grid={3} card={12} />,
});
export default function Page({
  searchParams,
}: {
  searchParams?: {
    q?: string;
  };
}) {
  return (
    <section>
      <span className=" font-bold">Pencarian Paket</span>
      <div className="grid grid-cols-12 grid-flow-row gap-3">
        <Card className=" col-span-2 rounded max-lg:hidden shadow-md p-3">
          <div className="flex flex-col gap-3">
            <span>Filter</span>
            <Separator />
            <SearchFilter />
          </div>
        </Card>
        <Card className="col-span-10 row-span-12 max-lg:col-span-12 rounded shadow-md p-3 ">
          <div className="flex flex-col gap-3">
            <div className="flex max-md:flex-col md:justify-between md:gap-10 items-center w-full">
              <div className="flex gap-3 w-full md:w-1/2">
                <SearchEngine q={searchParams?.q ?? ""} />
              </div>
              <div className="flex justify-between items-center max-md:w-full max-md:my-3">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="lg:hidden flex items-center gap-3 my-auto"
                    >
                      <FiFilter />
                      <span>Filter</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side={"left"}>
                    <SheetHeader>
                      <div className="flex items-center gap-3">
                        <FiFilter />
                        <SheetTitle>Filter</SheetTitle>
                      </div>
                      <Separator className="my-3" />
                    </SheetHeader>
                    <SearchFilter />
                  </SheetContent>
                </Sheet>
                <div>
                  <SearchOrder />
                </div>
              </div>
            </div>

            <Separator />
            <Suspense
              key={searchParams?.q}
              fallback={<LoadingSkeleton grid={3} card={12} />}
            >
              <SearchContent query={searchParams?.q ?? ""} />
            </Suspense>
          </div>
        </Card>
      </div>
    </section>
  );
}
