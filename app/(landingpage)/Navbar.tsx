"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { BiSolidMapPin } from "react-icons/bi";
import ProfileMenu from "@/components/users/profile-menu";
import { useComparison } from "@/lib/Zustands/User/Comparison";
export default function Navbar({
  session,
  comparison,
}: {
  session: any;
  comparison: any;
}) {
  const auth = !session === false;
  const pathname = usePathname();
  const { count, setCount } = useComparison((state) => state);
  const [openNav, setOpenNav] = useState(false);

  const closeNavbar = () => {
    setOpenNav(!setOpenNav);
  };

  useMemo(() => {
    setCount(comparison);
  }, []);

  return (
    <nav className="h-[4rem] shadow-md sticky top-0 z-[100] bg-blue-dark w-full ">
      <section className="md:container md:mx-auto max-md:mx-3 flex items-center justify-between h-full">
        <div className="flex md:hidden items-center gap-3">
          <Sheet open={openNav} onOpenChange={setOpenNav}>
            <SheetTrigger className="my-3" asChild>
              <Button
                className="text-white flex my-auto items-center bg-blue-dark hover:bg-blue-dark hover:text-white"
                variant={"outline"}
              >
                <FaBars className="text-md" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="bg-blue-dark text-white z-[100]"
            >
              <SheetHeader>
                <SheetTitle>
                  <Link
                    href={"/"}
                    className="text-white flex gap-1.5 items-center justify-center"
                    title={process.env.NEXT_PUBLIC_APP_NAME ?? "Logo"}
                    onClick={closeNavbar}
                  >
                    {/* <Image src={logo} width={500} height={500} className="w-[9rem]" alt={process.env.NEXT_PUBLIC_APP_NAME ?? 'Logo'} /> */}

                    {process.env.NEXT_PUBLIC_APP_NAME}
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-3 items-center">
                <Button
                  variant={"ghost"}
                  className="w-full"
                  asChild
                  onClick={closeNavbar}
                >
                  <Link href={"/paket"}>Paket</Link>
                </Button>
                <Button
                  variant={"ghost"}
                  className="w-full"
                  asChild
                  onClick={closeNavbar}
                >
                  <Link href={"/blog"}>Blog</Link>
                </Button>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-blue-dark">
                        Lainnya
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="mr-auto">
                        <div className="flex flex-col w-full">
                          <Link href={"/jadwal-sholat"}>
                            <Button variant={"ghost"}>Jadwal Sholat</Button>
                          </Link>
                          <Link href={"/alquran"}>
                            <Button variant={"ghost"} className="w-full">
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
          <Link href={"/"} className="text-white">
            {/* <Image src={logo} width={500} height={500} className="w-[9rem]" alt={process.env.NEXT_PUBLIC_APP_NAME ?? 'Logo'} /> */}
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Link>
        </div>
        <div className="flex gap-3 max-md:hidden">
          <h1 className="brand text-xl font-bold my-auto text-white/90">
            <Link
              href={"/"}
              className="text-white flex gap-1.5 items-center"
              title={process.env.NEXT_PUBLIC_APP_NAME ?? "Logo"}
            >
              {/* <Image src={logo} width={500} height={500} className="w-[9rem]" alt={process.env.NEXT_PUBLIC_APP_NAME ?? 'Logo'} /> */}
              {process.env.NEXT_PUBLIC_APP_NAME}
            </Link>
          </h1>
          <div className="flex gap-3 items-center">
            <Separator orientation="vertical" />
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href={"/paket"} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={
                        navigationMenuTriggerStyle() +
                        " bg-transparent hover:bg-transparent text-white/90 hover:text-white/70"
                      }
                    >
                      Paket
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href={"/blog"} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={
                        navigationMenuTriggerStyle() +
                        " bg-transparent hover:bg-transparent text-white/90 hover:text-white/70"
                      }
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white/90 hover:text-white/70">
                    Lainnya
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="mr-auto">
                    <div className="flex flex-col w-full">
                      <Link href={"/jadwal-sholat"}>
                        <Button variant={"ghost"}>Jadwal Sholat</Button>
                      </Link>
                      <Link href={"/alquran"}>
                        <Button variant={"ghost"} className="w-full">
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
          <Button
            variant={"outline"}
            className="text-white relative bg-transparent"
            size={"sm"}
            asChild
          >
            <Link href={"/perbandingan"} title="Perbandingan">
              <FontAwesomeIcon icon={faRightLeft} />
              <span className="bg-red-400 px-1 rounded-full absolute -top-2 -right-2 hover:text-white">
                {count > 0 && (
                  <span className="text-[10px] hover:text-white">{count}</span>
                )}
              </span>
            </Link>
          </Button>
          <Button
            title="Order Track"
            variant={"outline"}
            className="text-white relative bg-transparent"
            size={"sm"}
            asChild
          >
            <Link href={"/tracks"}>
              <BiSolidMapPin />
            </Link>
          </Button>
          {!auth && (
            <Button className="bg-green-600 hover:bg-green-700">
              <Link
                href={"/masuk?redirect=" + pathname}
                className="text-white/90"
              >
                Masuk
              </Link>
            </Button>
          )}
          {auth && <ProfileMenu session={session} />}
        </div>
      </section>
    </nav>
  );
}
