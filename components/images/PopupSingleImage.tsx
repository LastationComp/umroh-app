import React from 'react';
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog';
import Image from 'next/image';

interface SingleImage {
  open: boolean;
  url: string;
  title: string;
  onOpenChange: any;
}
export default function PopupSingleImage({ open, url, onOpenChange, title = 'Popup Image' }: SingleImage) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader>title Image</DialogHeader>
      <DialogContent>
        <Image src={url} alt={title} width={1000} height={1000} />
      </DialogContent>
    </Dialog>
  );
}
