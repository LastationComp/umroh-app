'use client';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function MultiUploader({ name }: { name?: string }) {
  const [files, setFiles]: any = useState([]);

  const addMore = () => {
    setFiles((prev: any) => [...prev, files.length + 1]);
  };

  const deleteMore = (index: number) => {
    const file = [...files];
    console.log(file);

    const newFiles = file.filter((data) => data !== index);
    console.log(newFiles);
    setFiles(newFiles);
  };
  return (
    <section className="flex flex-col gap-3 py-5 mb-5">
      <div>
        <Button role="button" onClick={addMore} type={'button'}>
          Tambah File
        </Button>
      </div>
      {files.map((file: any, index: number) => (
        <section className="relative" key={index}>
          <Input type="file" required name={name} className="cursor-pointer input:cursor-pointer file:cursor-pointer" />
          <Button role="button" onClick={() => deleteMore(file)} variant={'destructive'} aria-label="Hapus File" type="button" className="absolute right-0 top-0 scale-80 flex justify-end">
            -
          </Button>
        </section>
      ))}
    </section>
  );
}
