import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';
import { MdOutlineDateRange } from 'react-icons/md';
import BlogDetail from './DlogDetail';
import BlogsContent from './BlogsContent';
import SideBarDetail from './SideBarDetail';
import Tag from '@/components/blogs/Tag';
export default function BlogDetailPage({ params }: { params: { slug: string; category: string } }) {
  return (
    <Card className="bg-white md:p-10 p-5">
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-3">
          <MdOutlineDateRange />
          <span className="text-sm">24 April 2024</span>
        </div>
        <Separator className="h-5" orientation="vertical" />
        <span className="text-sm text-black/60 capitalize">
          <Tag>{params.category}</Tag>
        </span>
      </div>
      <section className="grid grid-cols-12 gap-3">
        <BlogDetail className="col-span-12 lg:col-span-8" />
        <SideBarDetail />
      </section>
    </Card>
  );
}
