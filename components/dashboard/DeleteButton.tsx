'use client';
import Alert from '@/components/callback/Alert';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react';
import { handleSubmit } from './action';
import SubmitButton from './SubmitButton';
import { IoTrashBinOutline } from 'react-icons/io5';
import { useSWRConfig } from 'swr';
import { toast } from 'react-toastify';
interface FormBuilderProps {
  endpoint: string;
  refreshEndpoint?: string;
}

const initialState = {
  success: false,
  type: 'error',
  message: '',
};

export default function DeleteButton({ endpoint = '', refreshEndpoint }: FormBuilderProps) {
  const [open, setOpen] = useState(false);
  const { mutate } = useSWRConfig();
  const handleOpenCloseFormAdd = () => {
    setOpen(!open);
  };

  const [state, setState]: any = useState(initialState);

  const handleFormAction = async (formData: FormData) => {
    const response = await handleSubmit(state, formData, endpoint);
    setState(response);
    if (response.success) {
      setState(initialState);
      await mutate((key) => Array.isArray(key) && key[0] === refreshEndpoint);
      toast.success(response.success);
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
          <span className="">Anda yakin ingin menghapus data ini?</span>
          <Separator />
          {state?.message && <Alert variant={state.type} message={state?.message} />}
          <form action={handleFormAction} method="post" className="grid gap-3">
            <div className="flex justify-between gap-3">
              <Button type="reset" variant={'outline'} onClick={handleOpenCloseFormAdd}>
                Batal
              </Button>
              <SubmitButton>Hapus</SubmitButton>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
