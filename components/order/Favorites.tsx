'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useToast } from '@/components/ui/use-toast';
import MustLoginPage from '../callback/must-login';
import { Dialog, DialogClose, DialogContent } from '../ui/dialog';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import nProgress from 'nprogress';
import { FavoritePacket } from './action';

export default function Favorites() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const handleButton = async () => {
    const favorite = await FavoritePacket();
    if (!favorite) return;
    setIsFavorite(!isFavorite);
    if (isFavorite) return;
    return toast({
      title: 'Berhasil Ditambahkan!',
      description: 'Paket berhasil ditambahkan.',
    });
  };

  return (
    <Button className="text-lg" variant={'ghost'} onClick={handleButton}>
      {!isFavorite ? <FaRegHeart /> : <FaHeart className="text-red-400" />}
    </Button>
  );
}
