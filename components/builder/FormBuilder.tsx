'use client';
import Alert from '@/components/callback/Alert';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import React, { useState } from 'react';
import { IoAddOutline, IoPencilOutline } from 'react-icons/io5';
import SubmitButton from './SubmitButton';
import { handleSubmit } from './action';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type FormBuilderForms = {
  name: string;
  label?: string | undefined;
  type?: React.HTMLInputTypeAttribute | undefined | 'select';
  placeholder?: string | undefined;
  selectData?: any[];
  currentValue?: string;
  apiData?: string;
};

interface FormBuilderProps {
  forms: FormBuilderForms[];
  endpoint: string;
  type?: 'Edit' | 'Add';
}

const initialState = {
  success: false,
  type: 'error',
  message: '',
};

export default function FormBuilder({ forms, endpoint = '', type = 'Add' }: FormBuilderProps) {
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
  const getHeaderType = () => {
    if (type === 'Edit') return 'Ubah';
    if (type === 'Add') return 'Tambah';
  };
  return (
    <section>
      {type === 'Add' && (
        <Button className="flex items-center gap-3" onClick={handleOpenCloseFormAdd}>
          <IoAddOutline />
          Tambah Data
        </Button>
      )}
      {type === 'Edit' && (
        <Button variant={'outline'} className="flex items-center gap-3" onClick={handleOpenCloseFormAdd}>
          <IoPencilOutline />
          <span className="lg:flex hidden">Ubah</span>
        </Button>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-md:scale-95">
          <DialogHeader>{getHeaderType()} Data</DialogHeader>
          <Separator />
          {state?.message && <Alert variant={state.type} message={state?.message} />}
          <form action={handleFormAction} method="post" className="grid gap-3">
            {forms.map((form, index) => {
              const data = form.selectData;

              return (
                <div className="flex flex-col gap-1" key={index}>
                  <Label htmlFor={'input-' + form.name} className="capitalize">
                    {form.label ?? form.name}
                  </Label>
                  {form.type !== 'select' && (
                    <Input defaultValue={form.currentValue} required name={form.name} type={form.type ?? 'text'} id={'input-' + form.name} placeholder={form.placeholder ?? 'Ketik disini...'} autoFocus={index === 0} />
                  )}
                  {form.type === 'select' && (
                    <Select name={form.name} defaultValue={form.currentValue} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={form.placeholder ?? 'Pilih salah satu...'} />
                      </SelectTrigger>
                      <SelectContent>
                        {data &&
                          data.map((select, index) => (
                            <SelectItem key={'select-' + index} value={String(select?.id)}>
                              {select.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              );
            })}
            <div className="flex justify-end gap-3">
              <SubmitButton>{getHeaderType()}</SubmitButton>
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
