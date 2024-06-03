'use client';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import { BiSolidMapPin } from 'react-icons/bi';
import ProfileMenu from '@/components/users/profile-menu';
export default function Navbar({ session }: { session: any }) {
  const auth = !session === false;
  const pathname = usePathname();
  return (
    <nav className="h-[4rem] shadow-md fixed top-0 z-50 bg-blue-dark w-full ">
      <section className="md:container md:mx-auto max-md:mx-3 flex items-center justify-between h-full">
        <div className="flex md:hidden items-center gap-3">
          <Sheet>
            <SheetTrigger className="my-3">
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
                <Button variant={'ghost'} className="w-full" asChild>
                  <Link href={'/paket'}>Paket Promo</Link>
                </Button>
                <Button variant={'ghost'} className="w-full" asChild>
                  <Link href={'/blog'}>Blog</Link>
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
                  <Link href={'/paket'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle() + ' bg-transparent hover:bg-transparent text-white/90 hover:text-white/70'}>Paket Promo</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={'/blog'} legacyBehavior passHref>
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
        {!auth && (
          <div className="flex items-center gap-3">
            <Button variant={'outline'} className="text-white relative bg-transparent" size={'sm'} asChild>
              <Link href={'/masuk?redirect=/perbandingan'}>
                <FontAwesomeIcon icon={faRightLeft} />
              </Link>
            </Button>
            <Button variant={'outline'} className="text-white relative bg-transparent" size={'sm'} asChild>
              <Link href={'/tracks'}>
                <BiSolidMapPin />
              </Link>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Link href={'/masuk?redirect=' + pathname} className="text-white/90">
                Masuk
              </Link>
            </Button>
          </div>
        )}
        {auth && (
          <div className="flex items-center gap-3">
            <Button variant={'outline'} className="text-white relative bg-transparent" size={'sm'} asChild>
              <Link href={'/perbandingan'}>
                <FontAwesomeIcon icon={faRightLeft} />
                <span className="bg-red-400 px-1 rounded-full absolute -top-2 -right-2 hover:text-white">
                  <span className="text-[10px] hover:text-white">22</span>
                </span>
              </Link>
            </Button>
            <Button variant={'outline'} className="text-white relative bg-transparent" size={'sm'} asChild>
              <Link href={'/tracks'}>
                <BiSolidMapPin />
              </Link>
            </Button>
            <ProfileMenu session={session} />
          </div>
        )}
      </section>
    </nav>
  );
}
