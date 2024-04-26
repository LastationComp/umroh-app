import React, { useEffect, useState } from 'react';
import { FormBuilderForms, FormBuilderProps } from './FormBuilder';
import useSWR from 'swr';
import { fetcher } from '@/lib/Fetcher';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';

type FormGeneratorProps = {
  form: FormBuilderForms;
  index?: number;
  allSelectData: any[];
  setSelectData: any;
};
export default function FormGenerator({ form, index, allSelectData, setSelectData }: FormGeneratorProps) {
  const selectData = form.dataType !== 'api' ? form.selectData : [];

  const { data } = useSWR(form.dataType === 'api' ? form.apiData : null, fetcher);

  const filterData = (filter: any) => {
    if (!form.needFilter) return true;
    const filterColumn = form.filterWith ?? '';
    const find = allSelectData.find((filterCol: any) => filterCol.name === filterColumn);
    return filter[filterColumn] === find?.value;
  };

  useEffect(() => {
    if (form.currentValue) setSelectData(form.name, form.currentValue ?? '');
  }, []);

  if (form.children)
    return (
      <section>
        {form.placeholder && <span className="text-sm text-black/80">{form.placeholder}</span>}
        {form.children}
      </section>
    );
  return (
    <div className="flex flex-col gap-1" key={index}>
      <Label htmlFor={'input-' + form.name} className="capitalize">
        {form.label ?? form.name}
      </Label>
      {form.type !== 'select' && form.type !== 'textarea' && (
        <section>
          <Input
            defaultValue={form.currentValue}
            className={cn(form.type === 'file' ? 'cursor-pointer input:cursor-pointer file:cursor-pointer' : '')}
            required={form.required ?? true}
            name={form.name}
            type={form.type ?? 'text'}
            id={'input-' + form.name}
            placeholder={form.placeholder ?? 'Ketik disini...'}
            autoFocus={index === 0}
          />
          {form.type === 'file' && <span className="text-sm text-black/30">{form.placeholder}</span>}
        </section>
      )}
      {form.type === 'select' && (
        <Select name={form.name} defaultValue={form.currentValue} onValueChange={(val) => setSelectData(form.name, val)} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={form.placeholder ?? 'Pilih salah satu...'} />
          </SelectTrigger>
          <SelectContent>
            {selectData &&
              selectData.map((select, index) => (
                <SelectItem key={'select-' + index} value={String(select?.id)}>
                  {select.name}
                </SelectItem>
              ))}
            {data &&
              data?.data.filter(filterData).map((select: any, index: number) => (
                <SelectItem key={'select-' + index} value={String(select?.id)}>
                  {select.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      )}
      {form.type === 'textarea' && <Textarea required={form.required ?? true} id={'input-' + form.name} name={form.name} rows={4} defaultValue={form.currentValue} />}
    </div>
  );
}
