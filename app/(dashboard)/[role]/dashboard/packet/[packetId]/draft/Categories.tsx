'use server';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';
import { getCategories } from '../../action';

export default async function Categories({ defaultValue }: { defaultValue: string }) {
  const categories = await getCategories();
  return (
    <Select name="category_id" defaultValue={defaultValue ?? ''}>
      <SelectTrigger>
        <SelectValue placeholder="Pilih Kategori" />
      </SelectTrigger>
      <SelectContent id="category">
        {categories &&
          categories.map((category: any, index: number) => (
            <SelectItem value={category.id} key={index}>
              {category.category_name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}
