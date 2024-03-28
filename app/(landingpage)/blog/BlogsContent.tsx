import BlogCard from '@/components/blogs/BlogCard';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';

export default function BlogsContent() {
  const umrohData = [1, 2, 3];
  return (
    <section className="flex flex-col gap-10 mt-10">
      <section>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Umroh</span>
          <Link href={'/blog'} className="text-sm text-blue-500 hover:text-blue-400 transition ease-in-out">
            Lihat lebih banyak
          </Link>
        </div>
        <Separator className="my-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {umrohData.map((umroh, index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Haji</span>
          <Link href={'/blog'} className="text-sm text-blue-500 hover:text-blue-400 transition ease-in-out">
            Lihat lebih banyak
          </Link>
        </div>
        <Separator className="my-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {umrohData.map((umroh, index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </section>
    </section>
  );
}
