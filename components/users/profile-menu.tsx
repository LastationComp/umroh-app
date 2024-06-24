"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import avatar from "@/public/profile/avatar.png";
import { Logout } from "./action";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";
import { useProfileAvatar } from "@/lib/Zustands/Profile";

export default function ProfileMenu({ session }: { session: Session }) {
  const profileAvatar = useProfileAvatar((state) => state.avatar);
  const [urlImage, setUrlImage] = useState(session.user.image);
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = async (formData: FormData) => {
    const res = await Logout(formData);
    if (!res) return;
    await signOut({ redirect: true, callbackUrl: "/" });
  };
  const getAvatarUser = () => {
    if (profileAvatar) return profileAvatar;
    if (!session) return avatar;
    if (urlImage.includes("default")) return avatar;
    return urlImage;
  };

  useEffect(() => {
    const url = pathname;
    if (url === "/") router.refresh();
  }, [pathname]);

  // useEffect(() => {
  //   socket.on('profile-' + session?.user.id, (image) => {
  //     setUrlImage(image);
  //   });
  //   return () => {
  //     socket.off('profile-' + session?.user.id);
  //   };
  // }, [session]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          title="Profil"
          src={getAvatarUser()}
          alt={session.user.name}
          className="object-cover rounded-full z-40 cursor-pointer"
          style={{
            width: "35px",
            height: "35px",
          }}
          width={35}
          height={35}
          quality={50}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"end"} sticky={"always"}>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={"/"}>Halaman Utama</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={"/profile"}>Profil Saya</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          {session.user.role !== "subscriber" && (
            <Link href={`/${session.user.role}/dashboard`}>Dashboard Saya</Link>
          )}
          {/* {(session.user.role === 'travel' && session.user.travel.role === 'staff') && <Link href={`/${session.user.role}/${session.user.travel.role}/dashboard`}>Dashboard Saya</Link>} */}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        {session.user.role === "subscriber" && (
          <section>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/favorit"}>Favorit Saya </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/favorit"}>Pesanan Saya</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </section>
        )}
        {session.user.role === "travel" && (
          <section>
            <DropdownMenuLabel>Travel Saya</DropdownMenuLabel>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/profile/travel"}>Profil</Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={'/profile'}>Pengaturan</Link>
            </DropdownMenuItem> */}
          </section>
        )}

        <form action={handleLogout}>
          <button type="submit" className="w-full">
            <DropdownMenuItem className="text-red-400 cursor-pointer">
              Keluar
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
