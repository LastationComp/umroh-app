'use client';
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { FaBed, FaWheelchair, FaWifi } from 'react-icons/fa';
import { iconData } from './iconData';

export default function IconFacilities({ value = '' }: { value?: string }) {
  const [icon, setIcon] = useState(value);
  return (
    <section className="">
      <ToggleGroup type="single" variant={'outline'} defaultValue={value} onValueChange={(val) => setIcon(val)} className="p-1 gap-2 flex justify-start gap-3 flex-wrap max-w-lg w-full">
        {iconData.map((icon, index) => (
          <ToggleGroupItem key={index} className="data-[state=on]:outline data-[state=on]:outline-blue-dark data-[state=on]:outline-2" value={icon.name} aria-label="Toggle bold">
            {icon.icon}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <input type="hidden" name="icon" value={icon} />
    </section>
  );
}
