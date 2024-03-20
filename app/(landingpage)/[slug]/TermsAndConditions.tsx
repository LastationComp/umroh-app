import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import { PiNotepadBold, PiNotepadLight } from 'react-icons/pi';
export default function TermsAndConditions() {
  return (
    <Card className="my-3">
      <CardHeader>
        <div className="flex gap-3 items-center font-bold">
          <PiNotepadBold />
          Syarat & Ketentuan
        </div>
      </CardHeader>
      <CardContent>
        <ul className="text-sm text-black/70 flex flex-col gap-3">
          <li>- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, labore?</li>
          <li>- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, labore?</li>
          <li>- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, labore?</li>
          <li>- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, labore?</li>
        </ul>
      </CardContent>
    </Card>
  );
}
