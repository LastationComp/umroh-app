import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '../ui/button';

interface DialogTriggerProps {
  title?: string;
  callback?: string;
}

export default function ShowDialog({ title, callback }: DialogTriggerProps) {
  const [openDialog, setOpenDialog] = useState(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="max-w-lg scale-90 flex flex-col justify-center items-center">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle>Berhasil Ditambahkan!</DialogTitle>
          <p className="line-clamp-1 font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, veritatis.</p>
          <DialogDescription>Paket berhasil ditambahkan</DialogDescription>
        </DialogHeader>
        <div className="flex gap-3">
          <Button onClick={handleCloseDialog}>Lanjut Mencari Paket</Button>
          <Button onClick={handleCloseDialog} variant={'outline'}>
            {callback ?? 'Tutup'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
