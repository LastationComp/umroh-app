import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import NewsContent from './NewsContent';
import BlogsContent from './BlogsContent';
import BlogSearch from './BlogSearch';

export default function Blog() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Blog</h1>
      <Card className="lg:p-5 md:p-5 p-3 flex flex-col gap-3">
        <BlogSearch />
        <BlogsContent />
      </Card>
    </section>
  );
}
