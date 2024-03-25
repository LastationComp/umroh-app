import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import { MdBackpack } from 'react-icons/md';
import { TbPoint } from 'react-icons/tb';
export default function Facilities() {
  return (
    <Card>
      <CardHeader>
        <span className="font-bold flex gap-3 items-center">
          <MdBackpack /> Facilities
        </span>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <span className="font-bold">Termasuk</span>
            <ul className="text-sm text-black/70">
              <li className="flex gap-3 items-center">
                <TbPoint />
                Lorem, ipsum dolor.
              </li>
              <li className="flex gap-3 items-center">
                <TbPoint />
                Lorem, ipsum dolor.
              </li>
              <li className="flex gap-3 items-center">
                <TbPoint />
                Lorem, ipsum dolor.
              </li>
              <li className="flex gap-3 items-center">
                <TbPoint />
                Lorem, ipsum dolor.
              </li>
              <li className="flex gap-3 items-center">
                <TbPoint />
                Lorem, ipsum dolor.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold">Tidak Termasuk</span>
            <ul className="text-sm text-black/70">
              <li className="flex gap-3 items-center">
                <TbPoint />
                Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex gap-3 items-center">
                <TbPoint />
                Lorem, ipsum dolor.
              </li>
              <li className="flex gap-3 items-center">
                <TbPoint />
                Lorem, ipsum dolor.
              </li>
              <li className="flex gap-3 items-center">
                <TbPoint />
                Lorem, ipsum dolor.
              </li>
              <li className="flex gap-3 items-center">
                <TbPoint />
                Lorem, ipsum dolor.
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
