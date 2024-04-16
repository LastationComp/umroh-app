'use client';
import Alert from '@/components/callback/Alert';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react';
import { handleSubmit } from './action';
import SubmitButton from './SubmitButton';
import { IoTrashBinOutline } from 'react-icons/io5';
interface FormBuilderProps {
  endpoint: string;
}

const initialState = {
  success: false,
  type: 'error',
  message: '',
};

export default function DeleteButton({ endpoint = '' }: FormBuilderProps) {
  const [open, setOpen] = useState(false);
  const handleOpenCloseFormAdd = () => {
    setOpen(!open);
  };

  const [state, setState]: any = useState(initialState);

  const handleFormAction = async (formData: FormData) => {
    const response = await handleSubmit(state, formData);
    setState(response);
    if (response.success) {
      setState(initialState);
      return setOpen(!open);
    }
  };
  return (
    <section>
      <Button variant={'destructive'} className="flex items-center gap-3" onClick={handleOpenCloseFormAdd}>
        <IoTrashBinOutline />
        <span className="lg:flex hidden">Hapus</span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-md:scale-95">
          <DialogHeader>Hapus Data</DialogHeader>
          <Separator />
          {state?.message && <Alert variant={state.type} message={state?.message} />}
          <form action={handleFormAction} method="post" className="grid gap-3">
            <span className="flex justify-center">Anda yakin ingin menghapus data ini?</span>
            <div className="flex justify-end gap-3">
              <SubmitButton>Hapus</SubmitButton>
              <Button type="reset" variant={'outline'} onClick={handleOpenCloseFormAdd}>
                Batal
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
