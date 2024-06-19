'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import ProfileMenu from '@/components/users/profile-menu';
import { cn } from '@/lib/utils';
import { Session } from 'next-auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { IoMdLock } from 'react-icons/io';
import { IoPerson } from 'react-icons/io5';
import { MdManageAccounts } from 'react-icons/md';
import { PiGearFill } from 'react-icons/pi';

interface SettingProps {
  children?: React.ReactNode;
  session: Session | null;
}
export default function SettingCard({ children, session }: SettingProps) {
  const pathname = usePathname();

  const active = (url: string) => {
    const newUrl = `/profile` + url;
    if (pathname === newUrl && (url === '' || url === '/' || url === '/travel')) return 'bg-accent text-accent-foreground';

    if (pathname.startsWith(newUrl) && !(url === '' || url === '/' || url === '/travel')) return 'bg-accent text-accent-foreground';

    return '';
  };
  const GenerateMenu = ({ url, title, children }: { url: string; title: string; children?: React.ReactNode }) => {
    const newUrl = `/profile` + url;
    return (
      <Button variant={'ghost'} className={cn('flex justify-start max-lg:justify-center gap-3', active(url))} asChild>
        <Link href={newUrl}>
          {children}
          <span className="hidden lg:flex">{title}</span>
        </Link>
      </Button>
    );
  };
  return (
    <Card className="p-3 w-full h-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl">Halaman Profil</h1>
          <span className="text-sm text-black/60">Ubah data pribadi anda disini.</span>
        </div>
      </div>
      <Separator className="my-3" />
      <section className="grid grid-cols-12 gap-5">
        <div className="col-span-2 flex flex-col gap-1">
          <span className="text-sm max-md:hidden">Akun Saya</span>
          <Separator />
          <GenerateMenu url="" title="Profil">
            <IoPerson />
          </GenerateMenu>
          <GenerateMenu url="/account" title="Akun">
            <MdManageAccounts />
          </GenerateMenu>
          <GenerateMenu url="/change-password" title="Ubah Password">
            <IoMdLock />
          </GenerateMenu>
          {session?.user.role === 'travel' && (
            <section className='grid gap-1.5'>
              <span className="text-sm max-md:hidden">Travel</span>
              <Separator />
              <GenerateMenu url="/travel" title="Profil">
                <BiSolidPlaneAlt />
              </GenerateMenu>
              {/* <GenerateMenu url="/travel/settings" title="Pengaturan">
                <PiGearFill />
              </GenerateMenu> */}
            </section>
          )}
        </div>
        <div className="col-span-10">{children}</div>
      </section>
    </Card>
  );
}
