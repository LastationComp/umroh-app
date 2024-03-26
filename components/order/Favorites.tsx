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

export default function Favorites() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  const handleButton = () => {
    if (!authenticated) {
      nProgress.start();
      return router.push('/masuk');
    }
    setIsFavorite(!isFavorite);
    if (isFavorite) return;
    return toast({
      title: 'Berhasil Ditambahkan!',
      description: 'Paket berhasil ditambahkan.',
    });
  };

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem('auth') === 'true';
    setAuthenticated(value);
  }, []);
  return (
    <Button className="text-lg" variant={'ghost'} onClick={handleButton}>
      {!isFavorite ? <FaRegHeart /> : <FaHeart className="text-red-400" />}
    </Button>
  );
}
