'use client';
import React from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command';
import { CalendarIcon, EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdHome } from 'react-icons/io';
import { FaCity } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import { IoGlobeOutline } from 'react-icons/io5';
export default function SideBar({ role }: { role: string }) {
  const pathname = usePathname();
  const GenerateBar = ({ url, title, children }: { url: string; title: string; children?: React.ReactNode }) => {
    const pathArray = pathname.split('/');
    const newUrl = `/${role}/dashboard` + url;
    const variant = () => {
      if (pathname === newUrl && (url === '' || url === '/')) return 'default';

      if (pathname.startsWith(newUrl) && !(url === '' || url === '/')) return 'default';

      return 'ghost';
    };

    return (
      <Button variant={variant()} asChild className="flex justify-start">
        <Link href={newUrl} className="flex items-center gap-3">
          {children}
          <span className="max-md:hidden">{title}</span>
        </Link>
      </Button>
    );
  };
  return (
    <aside className="col-span-2 p-3">
      <div className="flex flex-col gap-2">
        <GenerateBar url="" title="Dashboard">
          <IoMdHome />
        </GenerateBar>
        <div className="flex flex-col max-md:hidden">
          <span className="text-sm">Master Data</span>
          <Separator />
        </div>
        <GenerateBar url="/countries" title="Negara">
          <IoGlobeOutline />
        </GenerateBar>
        <GenerateBar url="/cities" title="Kota">
          <FaCity />
        </GenerateBar>
      </div>
    </aside>
  );
}
