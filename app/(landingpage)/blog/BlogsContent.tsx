import BlogCard from '@/components/blogs/BlogCard';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';

export default function BlogsContent() {
  const umrohData = [1, 2, 3];
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {umrohData.map((umroh, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </section>
  );
}
