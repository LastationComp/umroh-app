'use client';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import React from 'react';
export default function Navbar() {
  return (
    <nav className="h-[4rem] shadow-md fixed top-0 z-50 bg-white w-full">
      <section className="container mx-auto flex items-center justify-between h-full">
        <div className="sm:flex md:hidden">
          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader>
                <SheetTitle>
                  <Link href={'/'}>Umroh.ai</Link>
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
                      <NavigationMenuTrigger>Lainnya</NavigationMenuTrigger>
                      <NavigationMenuContent className="mr-auto">
                        <div className="flex flex-col w-full">
                          <Link href={'/'}>
                            <Button variant={'ghost'}>Jadwal Sholat</Button>
                          </Link>
                          <Link href={'/'}>
                            <Button variant={'ghost'} className="w-full">
                              Al Qur'an
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
        </div>
        <div className="flex gap-3 max-md:hidden">
          <h1 className="brand text-xl font-bold my-auto">
            <Link href={'/'}>Umroh.ai</Link>
          </h1>
          <div className="flex gap-3 items-center">
            <Separator orientation="vertical" />
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href={'/'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Paket Promo</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={'/'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Lainnya</NavigationMenuTrigger>
                  <NavigationMenuContent className="mr-auto">
                    <div className="flex flex-col w-full">
                      <Link href={'/'}>
                        <Button variant={'ghost'}>Jadwal Sholat</Button>
                      </Link>
                      <Link href={'/'}>
                        <Button variant={'ghost'} className="w-full">
                          Al Qur'an
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
          <Button variant={'ghost'}>Masuk</Button>
          <Button>Daftar</Button>
        </div>
      </section>
    </nav>
  );
}
