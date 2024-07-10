import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import { PiNotepadBold, PiNotepadLight } from 'react-icons/pi';
export default function TermsAndConditions({ data }: { data: any[] }) {
  const tac = data.map((tac) => tac.description);
  return (
    <Card className="my-3">
      <CardHeader>
        <div className="flex gap-3 items-center font-bold">
          <PiNotepadBold />
          Syarat & Ketentuan
        </div>
      </CardHeader>
      <CardContent>
        <ul className="text-sm text-black/70 flex flex-col gap-3 list-disc list-inside">
          {tac.map((terms, index) => (
            <li key={index}>{terms}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
