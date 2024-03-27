import React, { Suspense } from 'react';
import SearchEngine from './SearchEngine';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import SearchFilter from './SearchFilter';
import { Button } from '@/components/ui/button';
import SearchOrder from './SearchOrder';
import SearchContent from './SearchContent';
import LoadingSkeleton from '@/components/Suspense/LoadingSkeleton';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { FiFilter } from 'react-icons/fi';
export default function Page() {
  return (
    <div className="grid grid-cols-12 grid-flow-row gap-3">
      <Card className="rounded shadow-md p-3 col-span-12">
        <div className="flex gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'ghost'} className="lg:hidden flex items-center gap-3">
                <FiFilter />
                <span>Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={'left'}>
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

          <SearchEngine />
        </div>
      </Card>
      <Card className=" col-span-2 rounded max-lg:hidden shadow-md p-3">
        <div className="flex flex-col gap-3">
          <span>Filter</span>
          <Separator />
          <SearchFilter />
        </div>
      </Card>
      <Card className="col-span-10 row-span-12 max-lg:col-span-12 rounded shadow-md p-3 ">
        <div className="flex flex-col gap-3">
          <SearchOrder />
          <Separator />
          <Suspense fallback={<LoadingSkeleton grid={3} card={12} />}>
            <SearchContent />
          </Suspense>
        </div>
      </Card>
    </div>
  );
}
