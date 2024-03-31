import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import React from 'react';

export default function SearchOrder() {
  return (
    <div className="flex items-center gap-3">
      <span className="">Urutkan</span>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pilih urutan" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="terbaru">Terbaru</SelectItem>
          <SelectItem value="terlaris">Terlaris</SelectItem>
          <SelectItem value="termahal">Termahal</SelectItem>
          <SelectItem value="termurah">Termurah</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
