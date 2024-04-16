'use client';
import { delay } from '@/lib/Promise/Delay';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import avatar from '@/public/profile/avatar.png';
import { Logout } from './action';

export default function ProfileMenu() {
  const handleLogout = async () => {
    await delay(500);
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image src={avatar} alt={'Avatar'} className="object-cover rounded-full w-[35px] h-[35px] cursor-pointer" width={35} height={25} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={'end'} sticky={'always'}>
        <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={'/profile'}>Profil Saya</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={'/admin/dashboard'}>Dashboard Saya</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={'/favorit'}>Favorit Saya</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={'/favorit'}>Pesanan Saya</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Travel Saya</DropdownMenuLabel>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={'/profile'}>Profil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={'/profile'}>Pengaturan</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <form action={Logout} onSubmit={handleLogout}>
          <button type="submit" className="w-full">
            <DropdownMenuItem className="text-red-400 cursor-pointer">Keluar</DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
