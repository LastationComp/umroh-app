import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

export default function SideBarDetail() {
  return (
    <section className="col-span-4 max-lg:hidden">
      <div className="flex flex-col gap-3">
        <Card className="p-3">
          <CardHeader className="underline font-bold">Blog Terbaru</CardHeader>
          <CardContent>
            <ul className="list-disc text-sm text-slate-500">
              <li>
                <Link href={'/blog/category/title'} className="hover:underline">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, laudantium.
                </Link>
              </li>
              <li>
                <Link href={'/blog/category/title'} className="hover:underline">
                  Lorem ipsum dolor sit amet.
                </Link>
              </li>
              <li>
                <Link href={'/blog/category/title'} className="hover:underline">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="p-3">
          <CardHeader className="underline font-bold">Kategori</CardHeader>
          <CardContent>
            <ul className="list-disc text-sm text-slate-500">
              <li>
                <Link href={'/blog/category/title'} className="hover:underline">
                  Berita(23)
                </Link>
              </li>
              <li>
                <Link href={'/blog/category/title'} className="hover:underline">
                  Umroh(34)
                </Link>
              </li>
              <li>
                <Link href={'/blog/category/title'} className="hover:underline">
                  Haji(47)
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
