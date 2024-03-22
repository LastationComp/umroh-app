'use client';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ContactContent() {
  return (
    <section className="md:container md:mx-auto mx-3 mt-[3rem]">
      <div className="flex justify-between flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-[24px] font-bold">Umroh.ai</h1>
          <span className="text-xl font-semibold">Kontak Kami</span>
          <span className="text-sm text-black/70 flex gap-5">
            <Link href={'/'}>
              <FaWhatsapp className="text-[40px] hover:text-black cursor-pointer" />
            </Link>
            <Link href={'/'}>
              <MdEmail className="text-[40px] hover:text-black cursor-pointer" />
            </Link>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          <div className="flex flex-col gap-5">
            <span className="text-xl font-bold">Tentang Perusahaan</span>
            <Link href={''} className="text-black/70 hover:underline">
              Tentang Kami
            </Link>
            <Link href={''} className="text-black/70 hover:underline">
              Cara Pembayaran
            </Link>
            <Link href={''} className="text-black/70 hover:underline">
              Blog
            </Link>
            <Link href={''} className="text-black/70 hover:underline">
              FAQ
            </Link>
            <Link href={''} className="text-black/70 hover:underline">
              Syarat dan Ketentuan
            </Link>
            <Link href={''} className="text-black/70 hover:underline">
              Kebijakan Privasi
            </Link>
            <Link href={''} className="text-black/70 hover:underline">
              Site Map
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-xl font-bold">Produk</span>
            <Link href={''} className="text-black/70 hover:underline">
              Paket Umroh
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-xl font-bold">Travel Partner</span>
            <Link href={''} className="text-black/70 hover:underline">
              Gabung Travel Partner
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-xl font-bold">Ikuti Kami</span>
            <Link href={''} className="text-black/70 hover:underline flex items-center gap-3">
              <FaFacebook /> Facebook
            </Link>
            <Link href={''} className="text-black/70 hover:underline flex items-center gap-3">
              <FaTwitter /> Twitter
            </Link>
            <Link href={''} className="text-black/70 hover:underline flex items-center gap-3">
              <FaInstagram /> Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
