import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import NewsContent from './NewsContent';
import BlogsContent from './BlogsContent';

export default function Blog() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Blog</h1>
      <Card className="lg:p-10 md:p-5 p-3">
        <span className="font-bold">Terbaru</span>
        <Separator className="my-3" />
        <NewsContent />
        <BlogsContent />
      </Card>
    </section>
  );
}
