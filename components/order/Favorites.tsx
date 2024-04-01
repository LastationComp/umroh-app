'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useToast } from '@/components/ui/use-toast';
import { FavoritePacket } from './action';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';

interface FavoriteProps {
  title?: string;
}

export default function Favorites({ title }: FavoriteProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { toast } = useToast();
  
  const handleButton = async () => {
    const favorite = await FavoritePacket();
    if (!favorite) return;
    setIsFavorite(!isFavorite);
    if (isFavorite) return;
    // return toast({
    //   title: 'Berhasil Ditambahkan!',
    //   description: 'Paket berhasil ditambahkan.',
    // });
    return setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <section>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-lg scale-90 flex flex-col justify-center items-center">
          <DialogHeader className="flex flex-col items-center">
            <DialogTitle>Berhasil Ditambahkan!</DialogTitle>
            <p className="line-clamp-1 font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, veritatis.</p>
            <DialogDescription>Paket berhasil ditambahkan</DialogDescription>
          </DialogHeader>
          <div className="flex gap-3">
            <Button onClick={handleCloseDialog}>Lanjut Mencari Paket</Button>
            <Button variant={'outline'} asChild>
              <Link href={'/favorit'}>Ke Halaman Favorit</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Button className="text-lg" variant={'ghost'} onClick={handleButton}>
        {!isFavorite ? <FaRegHeart /> : <FaHeart className="text-red-400" />}
      </Button>
    </section>
  );
}
