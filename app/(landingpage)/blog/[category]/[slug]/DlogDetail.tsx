import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Shares from './Shares';

export default function DlogDetail() {
  return (
    <section className="flex flex-col gap-3 my-5">
      <Link href={'/blog/content/title'} className="text-md hover:text-blue-600 font-bold transition line-clamp-2 ease-in duration-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, fuga. Vitae ipsum sit inventore saepe sed voluptate, ab eius consequatur! Amet, iure blanditiis similique voluptatibus facilis corrupti a aut recusandae!
      </Link>
      <Image
        className="w-full h-max-[500px] object-cover rounded-xl flex justify-center"
        src={'https://c4.wallpaperflare.com/wallpaper/216/846/440/mount-fuji-japan-landscape-calm-waters-wallpaper-preview.jpg'}
        width={1000}
        height={1000}
        alt="Image Blog"
      />
      
      <p className="leading-relaxed text-slate-500 indent-8 text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maiores illum fuga, quia iure amet velit fugiat! Explicabo voluptates, ullam laborum consequuntur architecto delectus magnam incidunt fugit mollitia accusamus dignissimos
        nam iste beatae hic. Fugiat, aliquid nesciunt nihil voluptatem nam totam cumque ea laudantium eligendi vel inventore doloribus exercitationem a ullam ducimus veniam facilis perspiciatis deserunt aperiam rerum porro suscipit
        cupiditate omnis! Blanditiis facilis dolor autem totam rerum! Illo velit amet laudantium ratione optio non! Doloremque, ipsam sed sunt cum enim harum hic esse debitis, laboriosam quo minima temporibus culpa soluta aspernatur id
        animi fugiat reiciendis ea nam ullam natus?
      </p>
      <p className="leading-relaxed text-slate-500 indent-8 text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maiores illum fuga, quia iure amet velit fugiat! Explicabo voluptates, ullam laborum consequuntur architecto delectus magnam incidunt fugit mollitia accusamus dignissimos
        nam iste beatae hic. Fugiat, aliquid nesciunt nihil voluptatem nam totam cumque ea laudantium eligendi vel inventore doloribus exercitationem a ullam ducimus veniam facilis perspiciatis deserunt aperiam rerum porro suscipit
        cupiditate omnis! Blanditiis facilis dolor autem totam rerum! Illo velit amet laudantium ratione optio non! Doloremque, ipsam sed sunt cum enim harum hic esse debitis, laboriosam quo minima temporibus culpa soluta aspernatur id
        animi fugiat reiciendis ea nam ullam natus?
      </p>
      <span className="text-slate-800 text-sm">
        Dibuat oleh <b>Lasinto</b>
      </span>
        <Shares url="" title="Blog" />

    </section>
  );
}
