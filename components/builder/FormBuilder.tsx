'use client';
import Alert from '@/components/callback/Alert';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import React, { Children, useEffect, useState } from 'react';
import { IoAddOutline, IoPencilOutline } from 'react-icons/io5';
import SubmitButton from './SubmitButton';
import { handleSubmit } from './action';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useRouter } from 'next/navigation';
import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from '@/lib/Fetcher';
import { cn } from '@/lib/utils';
import { Textarea } from '../ui/textarea';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import FormGenerator from './FormGenerator';
import { toast } from 'react-toastify';

export type FormBuilderForms = {
  name: string;
  label?: string | undefined;
  type?: React.HTMLInputTypeAttribute | undefined | 'select' | 'textarea';
  placeholder?: string | undefined;
  selectData?: any[];
  dataType?: 'api' | 'data';
  currentValue?: string;
  apiData?: string;
  needFilter?: boolean;
  filterWith?: string;
  required?: boolean;
  children?: React.ReactNode;
};

export interface FormBuilderProps {
  forms: FormBuilderForms[];
  endpoint?: string;
  type?: 'Edit' | 'Add';
  refreshEndpoint?: string;
  refreshServer?: boolean;
}

const initialState = {
  success: false,
  type: 'error',
  message: '',
};

export default function FormBuilder({ forms, endpoint, type = 'Add', refreshEndpoint = '', refreshServer = false }: FormBuilderProps) {
  const [open, setOpen] = useState(false);
  const [allSelectData, setAllSelectData]: any = useState([]);
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const handleOpenCloseFormAdd = () => {
    setOpen(!open);
  };

  const [state, setState]: any = useState(initialState);

  const handleFormAction = async (formData: FormData) => {
    forms.forEach((form) => {
      if (form.type === 'file') {
        const image = formData.get(form.name) as File;
        if (image.size === 0) return formData.delete(form.name);
      }
    });
    const response = await handleSubmit(state, formData, endpoint);
    setState(response);
    if (response.success) {
      setState(initialState);
      if (!refreshServer) await mutate((key) => Array.isArray(key) && key[0] === refreshEndpoint);
      if (refreshServer) router.refresh();
      toast.success(response.message);
      return setOpen(!open);
    }
  };

  const getHeaderType = () => {
    if (type === 'Edit') return 'Ubah';
    if (type === 'Add') return 'Tambah';
  };

  const setSelectData = (name: string, value: string) => {
    if (!value) return;
    const getData = [...allSelectData];

    let data = {
      name: name,
      value: value,
    };
    const findExistsData = getData.find((data) => data.name === name);
    const dataWithoutExists = getData.filter((data) => data.name !== name);
    if (!findExistsData) return setAllSelectData((prev: any) => [...prev, data]);

    return setAllSelectData([...dataWithoutExists, data]);
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
          <form action={handleFormAction} className="grid gap-3">
            <ScrollArea className="max-h-full p-1">
              <section className="max-h-96 py-3 px-1 grid gap-3">
                {forms.map((form, index) => (
                  <FormGenerator form={form} key={index} index={index} allSelectData={allSelectData} setSelectData={setSelectData} />
                ))}
              </section>

              <ScrollBar />
            </ScrollArea>
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
