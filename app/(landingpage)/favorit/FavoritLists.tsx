'use client';
import PacketCard from '@/components/packet/PacketCard';
import { useFavorites } from '@/lib/Zustands/User/Favorites';
import React, { useState } from 'react';

export default function FavoritLists({ data }: { data: any[] }) {
  // const [favorit, setFavorit] = useState(data);
  const favorit = useFavorites((state) => state.favorites);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {favorit &&
        favorit.map((paket_umroh: any, index: number) => (
          <section key={indexnb}>
            <PacketCard data={paket_umroh} index={index} />
          </section>
        ))}
    </section>
  );
}
