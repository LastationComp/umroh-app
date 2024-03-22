'use client';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import avatar from '@/public/profile/avatar.png';
import { MdCompareArrows } from 'react-icons/md';
import { Badge } from '@/components/ui/badge';
import { FiShoppingCart } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  // const authenticated = localStorage.getItem('auth') === 'true';
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem('auth') === 'true';
    setAuthenticated(value);
  }, []);
  return (
    <nav className="h-[4rem] shadow-md fixed top-0 z-50 bg-blue-dark w-full ">
      <section className="container mx-auto flex items-center justify-between h-full">
        <div className="flex md:hidden items-center gap-3">
          <Sheet>
            <SheetTrigger className="my-3 -ml-3">
              <span className="text-white flex my-auto items-center">
                <FaBars className="text-md" />
              </span>
            </SheetTrigger>
            <SheetContent side={'left'} className="bg-blue-dark text-white">
              <SheetHeader>
                <SheetTitle>
                  <Link href={'/'} className="text-white">
                    Umroh.ai
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-3 items-center">
                <Button variant={'ghost'} className="w-full">
                  Paket Promo
                </Button>
                <Button variant={'ghost'} className="w-full">
                  Blog
                </Button>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-blue-dark">Lainnya</NavigationMenuTrigger>
                      <NavigationMenuContent className="mr-auto">
                        <div className="flex flex-col w-full">
                          <Link href={'/'}>
                            <Button variant={'ghost'}>Jadwal Sholat</Button>
                          </Link>
                          <Link href={'/'}>
                            <Button variant={'ghost'} className="w-full">
                              Al Quran
                            </Button>
                          </Link>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </SheetContent>
          </Sheet>
          <Link href={'/'} className="text-white">
            Umroh.ai
          </Link>
        </div>
        <div className="flex gap-3 max-md:hidden">
          <h1 className="brand text-xl font-bold my-auto text-white/90">
            <Link href={'/'}>Umroh.ai</Link>
          </h1>
          <div className="flex gap-3 items-center">
            <Separator orientation="vertical" />
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href={'/'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle() + ' bg-transparent hover:bg-transparent text-white/90 hover:text-white/70'}>Paket Promo</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={'/'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle() + ' bg-transparent hover:bg-transparent text-white/90 hover:text-white/70'}>Blog</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white/90 hover:text-white/70">Lainnya</NavigationMenuTrigger>
                  <NavigationMenuContent className="mr-auto">
                    <div className="flex flex-col w-full">
                      <Link href={'/'}>
                        <Button variant={'ghost'}>Jadwal Sholat</Button>
                      </Link>
                      <Link href={'/'}>
                        <Button variant={'ghost'} className="w-full">
                          Al Quran
                        </Button>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {!authenticated && (
          <div className="flex items-center gap-3">
            <Button variant={'ghost'} className="hover:bg-transparent">
              <Link href={'/auth'} className="hover:text-blue-500 text-white/90">
                Masuk
              </Link>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Daftar</Button>
          </div>
        )}
        {authenticated && (
          <div className="flex items-center gap-3 mr-3">
            <Button variant={'outline'} className="text-white relative bg-transparent" size={'sm'} asChild>
              <Link href={'/comparison'}>
                <FiShoppingCart />
                <span className="bg-red-400 p-1 rounded-full absolute -top-1 -right-1 animate-ping"></span>
                <span className="bg-red-400 p-1 rounded-full absolute -top-1 -right-1"></span>
              </Link>
            </Button>
            <Button variant={'outline'} className="text-white relative bg-transparent" size={'sm'} asChild>
              <Link href={'/comparison'}>
                <FontAwesomeIcon icon={faRightLeft} />
                <span className="bg-red-400 p-1 rounded-full absolute -top-1 -right-1 animate-ping"></span>
                <span className="bg-red-400 p-1 rounded-full absolute -top-1 -right-1"></span>
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image src={avatar} alt={'Avatar'} className="object-cover rounded-full w-auto h-auto cursor-pointer" width={25} height={25} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align={'end'} sticky={'always'}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-400 cursor-pointer"
                  onClick={() => {
                    localStorage.setItem('auth', 'false');
                    setAuthenticated(false);
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </section>
    </nav>
  );
}
