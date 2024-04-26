'use client';
import Alert from '@/components/callback/Alert';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react';
import { handleSubmit } from './action';
import { IoTrashBinOutline } from 'react-icons/io5';
import SubmitButton from '../builder/SubmitButton';
import { useRouter } from 'next/navigation';
interface FormBuilderProps {
  endpoint: string;
  refreshEndpoint?: string;
  children?: React.ReactNode;
  message?: string;
}

const initialState = {
  success: false,
  type: 'error',
  message: '',
};

export default function DeleteButton({ endpoint = '', children, message }: FormBuilderProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleOpenCloseFormAdd = () => {
    setOpen(!open);
  };

  const [state, setState]: any = useState(initialState);

  const handleFormAction = async (formData: FormData) => {
    const response = await handleSubmit(state, formData, endpoint);
    setState(response);
    if (response.success) {
      setState(initialState);
      router.refresh();
      return setOpen(!open);
    }
  };
  return (
    <section>
      <Button variant={'destructive'} className="flex items-center gap-3" onClick={handleOpenCloseFormAdd}>
        <IoTrashBinOutline />
        {children && <span className="lg:flex hidden">{children}</span>}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-md:scale-95">
          <DialogHeader>Hapus Data</DialogHeader>
          <Separator />
          {state?.message && <Alert variant={state.type} message={state?.message} />}
          <form action={handleFormAction} method="post" className="grid gap-3">
            <span className="flex justify-center">{message ?? 'Anda yakin ingin menghapus data ini?'}</span>
            <div className="flex justify-end gap-3">
              <SubmitButton variant={'destructive'}>Hapus</SubmitButton>
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
