'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdHome } from 'react-icons/io';
import { FaCity, FaHotel } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import { IoGlobeOutline } from 'react-icons/io5';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';
import { SiChinaeasternairlines } from 'react-icons/si';
import { BiCategory } from 'react-icons/bi';
import { MdDomainVerification, MdHotelClass, MdManageAccounts } from 'react-icons/md';
import { FaGear } from 'react-icons/fa6';
export default function SideBar({ role }: { role: string }) {
  const pathname = usePathname();
  const GenerateBar = ({ url, title, children }: { url: string; title: string; children?: React.ReactNode }) => {
    const newUrl = `/${role}/dashboard` + url;
    const variant = () => {
      if (pathname === newUrl && (url === '' || url === '/')) return 'default';

      if (pathname.startsWith(newUrl) && !(url === '' || url === '/')) return 'default';

      return 'ghost';
    };

    return (
      <Button variant={variant()} asChild className="flex justify-start">
        <Link href={newUrl} className="flex items-center max-lg:justify-center gap-3">
          {children}
          <span className="max-lg:hidden line-clamp-1">{title}</span>
        </Link>
      </Button>
    );
  };
  return (
    <section className="bg-white min-h-svh">
      <aside className="p-3 sticky top-0">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">Dashboard</span>
          <Separator />
          <GenerateBar url="" title="Dashboard">
            <IoMdHome />
          </GenerateBar>
          {role === 'admin' && (
            <section className="flex flex-col gap-3">
              <div className="flex flex-col max-md:hidden">
                <span className="text-sm">Master Data</span>
                <Separator />
              </div>
              <GenerateBar url="/countries" title="Negara">
                <IoGlobeOutline />
              </GenerateBar>
              <GenerateBar url="/provinces" title="Provinsi">
                <LiaMapMarkedAltSolid />
              </GenerateBar>
              <GenerateBar url="/cities" title="Kota">
                <FaCity />
              </GenerateBar>
              <GenerateBar url="/categories" title="Kategori">
                <BiCategory />
              </GenerateBar>
              <GenerateBar url="/airlines" title="Penerbangan">
                <SiChinaeasternairlines />
              </GenerateBar>
              <GenerateBar url="/facilities" title="Fasilitas">
                <MdHotelClass />
              </GenerateBar>
              <GenerateBar url="/hotels" title="Hotel">
                <FaHotel />
              </GenerateBar>
              <div className="flex flex-col max-md:hidden">
                <span className="text-sm">Master Akun</span>
                <Separator />
              </div>
              <GenerateBar url="/staffs" title="Staff">
                <MdManageAccounts />
              </GenerateBar>
              <div className="flex flex-col max-md:hidden">
                <span className="text-sm">Travel</span>
                <Separator />
              </div>
              <GenerateBar url="/travel-verification" title="Verifikasi Travel">
                <MdDomainVerification />
              </GenerateBar>
            </section>
          )}

          {role === 'staff' && (
            <section className="flex flex-col gap-3">
              <div className="flex flex-col max-md:hidden">
                <span className="text-sm">Travel</span>
                <Separator />
              </div>
              <GenerateBar url="/travel-verification" title="Verifikasi Travel">
                <MdDomainVerification />
              </GenerateBar>
            </section>
          )}

          {role === 'travel' && (
            <section className="flex flex-col gap-3">
              <div className="flex flex-col max-md:hidden">
                <span className="text-sm">Travel</span>
                <Separator />
              </div>
              <GenerateBar url="/packet" title="Paket">
                <MdDomainVerification />
              </GenerateBar>
              <GenerateBar url="/settings" title="Pengaturan">
                <FaGear />
              </GenerateBar>
            </section>
          )}
        </div>
      </aside>
    </section>
  );
}
