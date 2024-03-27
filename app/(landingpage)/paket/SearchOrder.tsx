import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import React from 'react';

export default function SearchOrder() {
  return (
    <ScrollArea className="w-full">
      <div className="flex items-center gap-3 max-md:mb-3 m-1">
        <span className="max-md:hidden">Urutkan</span>
        <ToggleGroup type="single" className="flex gap-3">
          <ToggleGroupItem value="a" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
            Termahal
          </ToggleGroupItem>
          <ToggleGroupItem value="b" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
            Termurah
          </ToggleGroupItem>
          <ToggleGroupItem value="c" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
            Terbaru
          </ToggleGroupItem>
          <ToggleGroupItem value="d" className="outline outline-1 w-full outline-blue-dark data-[state=on]:outline-blue-dark data-[state=on]:outline-2">
            Terlaris
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <ScrollBar orientation={'horizontal'} />
    </ScrollArea>
  );
}
