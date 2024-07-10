import { Card, CardContent, CardHeader } from '@/components/ui/card';
import TimeLine from '@/components/ui/timeline';
import React, { useMemo } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaLocationArrow, FaRegMap } from 'react-icons/fa';
import { IoLocateOutline } from 'react-icons/io5';

export default function TimeLinePage({ data }: { data: any[] }) {
  const plans = useMemo(() => {
    return data.map((plan) => {
      return {
        title: 'Hari ' + plan.day,
        content: plan.description ?? 'Tidak ada keterangan...',
      };
    });
  }, []);
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <FaRegMap />
          <span className="text-md font-bold">Rencana Perjalanan</span>
        </div>
      </CardHeader>
      <CardContent className="mx-3">
        <TimeLine items={plans} icon={<CiLocationOn />} />
      </CardContent>
    </Card>
  );
}
