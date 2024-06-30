'use client';
import { Card } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';
import React from 'react';
import 'yet-another-react-lightbox/styles.css';
import BlogCard from '@/components/blogs/BlogCard';
export default function StoryContent() {
  const blogs = [1, 2, 3];
  return (
    <div className=" md:container md:mx-auto mx-3 my-5">
      <Card className="bg-white p-5 relative">
        <div className="bg-black/40 absolute top-0 left-0 w-full h-full rounded-md z-50">
          <div className="flex justify-center items-center w-full h-full text-white">
            <span className="font-semibold">Masih dalam pengembangan...</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[24px]">Blogs</span>
          <Link href={'/blog'} className="text-end">
            Lihat Lebih Banyak
          </Link>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </Card>

      {/* <Lightbox
          open={true}
          plugins={[Video]}
          slides={[
            {
              type: 'video',
              width: 1280,
              height: 720,
              // poster: '/public/poster-image.jpg',
              sources: [
                {
                  src: 'https://www.youtube.com/watch?v=hc1XZYLwIhw',
                  type: 'video/mp4',
                },
              ],
            },
            // ...
          ]}
          // ...
        /> */}
    </div>
  );
}
