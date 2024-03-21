import { Card, CardContent, CardHeader } from '@/components/ui/card';
import TimeLine from '@/components/ui/timeline';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaLocationArrow, FaRegMap } from 'react-icons/fa';
import { IoLocateOutline } from 'react-icons/io5';

const data = [
  {
    title: 'Hari 1',
    content: "Umroh I'tikaf Ramadhan Ruby Free Kereta Cepat Hari ke-1",
  },
  {
    title: 'Hari 2',
    content: "Umroh I'tikaf Ramadhan Ruby Free Kereta Cepat Hari ke-2",
  },
  {
    title: 'Hari 3',
    content: "Umroh I'tikaf Ramadhan Ruby Free Kereta Cepat Hari ke-3",
  },
  {
    title: 'Hari 4',
    content: "Umroh I'tikaf Ramadhan Ruby Free Kereta Cepat Hari ke-4",
  },
  {
    title: 'Hari 5',
    content: "Umroh I'tikaf Ramadhan Ruby Free Kereta Cepat Hari ke-5",
  },
  {
    title: 'Hari 6',
    content: "Umroh I'tikaf Ramadhan Ruby Free Kereta Cepat Hari ke-6",
  },
];

export default function TimeLinePage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <FaRegMap />
          <span className="text-md font-bold">Rencana Perjalanan</span>
        </div>
      </CardHeader>
      <CardContent className="mx-3">
        <TimeLine items={data} icon={<CiLocationOn />} />
      </CardContent>
    </Card>
  );
}
