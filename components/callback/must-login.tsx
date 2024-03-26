import React, { useState } from 'react';
import { Dialog, DialogClose, DialogContent } from '../ui/dialog';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function MustLoginPage({ open = false, onOpenChange }: { open: boolean, onOpenChange: any }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="md:max-w-lg max-w-sm">
        <DialogClose asChild>
          <Button className="uppercase flex ml-auto absolute top-0 right-0" variant={'ghost'}>
            x
          </Button>
        </DialogClose>
        <div className="flex flex-col items-center text-center">
          <span>Kamu harus masuk untuk melakukan aksi ini</span>
          <Button asChild>
            <Link href={'/masuk'}>Masuk</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
