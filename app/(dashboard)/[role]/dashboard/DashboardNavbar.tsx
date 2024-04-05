import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import avatar from '@/public/profile/avatar.png';
import Image from 'next/image';
import Link from 'next/link';
import NavigationBar from './NavigationBar';
import { Separator } from '@/components/ui/separator';

interface DashboardProps {
  role: string;
}

export default function DashboardNavbar({ role }: DashboardProps) {
  return (
    <nav className="py-3 flex justify-between items-center gap-3 px-5 shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold">Umroh.ai Dashboard</span>
        {/* <Separator orientation={'vertical'} className="h-[30px]" /> */}
        {/* <NavigationBar role={role} /> */}
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={avatar} alt={'Avatar'} className="object-cover rounded-full w-auto h-auto cursor-pointer" width={25} height={25} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align={'end'}>
            <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profil Saya</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer hover:text-red-400 hover:bg-red-500" asChild>
              <Link href={'/logout'} className="text-red-400 hover:text-red-400">
                Keluar
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
