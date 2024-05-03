'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

export default function MultiCredentials({ indexCredentials }: { indexCredentials?: number }) {
  const [files, setFiles]: any = useState([1]);

  const remove = () => {
    const file = [...files];
    file.pop();
    setFiles(file);
  };
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Button role="button" type="button" onClick={() => setFiles([...files, 1])}>
          Tambah File
        </Button>
      </div>
      {files.map((file: any, index: number) => (
        <section className="relative" key={index}>
          <div className="flex items-center gap-3">
            <Input className="file:cursor-pointer cursor-pointer" required type="file" accept="image/*" name={`credentials-${indexCredentials ?? ''}[]`} />
          </div>
          {index !== 0 && (
            <Button variant={'destructive'} type="button" className="absolute top-0 right-0" onClick={remove}>
              Hapus
            </Button>
          )}
        </section>
      ))}
    </div>
  );
}
