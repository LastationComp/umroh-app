'use client';
import React, { useState } from 'react';
import GetIconFacilities from './GetIconFacilities';
import { Button } from '../ui/button';

export default function GetHotelFacilities({ data = [] }: { data?: any[] }) {
  return (
    <section className="flex gap-3 flex-wrap">
      {data.map((icon, index) => (
        <Button variant={'outline'} key={index} className="flex gap-3 items-center">
          <GetIconFacilities name={icon.icon} />
          {icon.name}
        </Button>
      ))}
    </section>
  );
}
