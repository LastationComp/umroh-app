import SubmitButton from '@/components/builder/SubmitButton';
import Alert from '@/components/callback/Alert';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import React from 'react';

interface CountryFormProps {
  open: boolean;
  onOpenChange?: any;
}
export default function CountryForm({ open, onOpenChange }: CountryFormProps) {
  const handleClose = () => {
    onOpenChange(!open);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-md:scale-95">
        <DialogHeader>Tambah Data</DialogHeader>
        <Separator />
        {/* <Alert variant={'error'} message="Error Message" /> */}
        <form action="" method="post" className="grid gap-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name">Nama Negara</Label>
            <Input name="name" id="name" placeholder="Masukkan Nama Negara" autoFocus />
          </div>
          <div className="flex justify-end gap-3">
            <SubmitButton>Simpan</SubmitButton>
            <Button type="reset" variant={'outline'} onClick={handleClose}>
              Batal
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
