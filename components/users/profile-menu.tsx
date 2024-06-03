'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import avatar from '@/public/profile/avatar.png';
import { Logout } from './action';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';
// import { pusher } from '@/lib/Services/pusher';
import { socket } from '@/lib/Services/socket';
import { usePathname, useRouter } from 'next/navigation';

export default function ProfileMenu({ session }: { session: Session }) {
  const [urlImage, setUrlImage] = useState(session.user.image);
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = async (formData: FormData) => {
    const res = await Logout(formData);
    if (!res) return;
    await signOut();
  };
  const getAvatarUser = () => {
    if (!session) return avatar;
    if (urlImage.includes('default')) return avatar;
    return urlImage;
  };

  useEffect(() => {
    const url = pathname;
    if (url === '/') router.refresh();
  }, [pathname]);
  // useEffect(() => {
  //   const privateChannel = pusher.subscribe('profile-' + session.user.id);
  //   if (!privateChannel.subscribed) console.log('tidak terhubung lho');

  //   // socket.on('account-' + session.user.id, (data: any) => {
  //   //   console.log(data);
  //   //   setUrlImage(data);
  //   // });
  //   privateChannel.bind('change-image', (data: any) => {
  //     console.log(data);
  //     setUrlImage(data.image_url);
  //   });
  //   if (privateChannel.subscribed) console.log('terhubung lho');
  //   return () => {
  //     // socket.off('account-' + session.user.id);
  //     pusher.unsubscribe('profile-' + session.user.id);
  //   };
  // }, [session]);

  useEffect(() => {
    socket.on('profile-' + session?.user.id, (image) => {
      setUrlImage(image);
    });
    return () => {
      socket.off('profile-' + session?.user.id);
    };
  }, [session]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image src={getAvatarUser()} alt={session.user.name} className="object-cover rounded-full w-[35px] h-[35px] z-40 cursor-pointer" width={35} height={25} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={'end'} sticky={'always'}>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={'/'}>Halaman Utama</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={'/profile'}>Profil Saya</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          {(session.user.role !== 'subscriber') && <Link href={`/${session.user.role}/dashboard`}>Dashboard Saya</Link>}
          {/* {(session.user.role === 'travel' && session.user.travel.role === 'staff') && <Link href={`/${session.user.role}/${session.user.travel.role}/dashboard`}>Dashboard Saya</Link>} */}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        {session.user.role === 'subscriber' && (
          <section>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={'/favorit'}>Favorit Saya </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={'/favorit'}>Pesanan Saya</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </section>
        )}
        {session.user.role === 'travel' && (
          <section>
            <DropdownMenuLabel>Travel Saya</DropdownMenuLabel>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={'/profile'}>Profil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={'/profile'}>Pengaturan</Link>
            </DropdownMenuItem>
          </section>
        )}

        <form action={handleLogout}>
          <button type="submit" className="w-full">
            <DropdownMenuItem className="text-red-400 cursor-pointer">Keluar</DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
