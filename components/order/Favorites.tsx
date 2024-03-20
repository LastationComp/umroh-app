import React, { useState } from 'react';
import { Button } from '../ui/button';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useToast } from '@/components/ui/use-toast';

export default function Favorites() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const handleButton = () => {
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
