'use client';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import React from 'react';
import { FaBars } from 'react-icons/fa';
export default function Navbar() {
  return (
    <nav className="h-[4rem] shadow-md fixed top-0 z-50 bg-blue-dark w-full">
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
        <div className="flex items-center gap-3">
          <Button variant={'ghost'} className="hover:bg-transparent">
            <span className="hover:text-blue-500 text-white/90">Masuk</span>{' '}
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">Daftar</Button>
        </div>
      </section>
    </nav>
  );
}
