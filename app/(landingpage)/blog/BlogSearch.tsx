import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

export default function BlogSearch() {
  return (
    <div className="flex items-center w-full md:w-1/2 gap-3">
      <Input placeholder="Cari Blog..." />
      <Button>Cari</Button>
    </div>
  );
}
