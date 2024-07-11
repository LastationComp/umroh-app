'use client';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import search from '@/public/assets/Search.jpg';
import comparison from '@/public/assets/Comparison.png';
import monitoring from '@/public/assets/monitoring.png';
import padlock from '@/public/assets/padlock.png';
export default function FeaturesContent() {
  return (
    <section className="text-sm md:text-md lg:text-lg">
      <div className="flex justify-center my-3 gap-3 flex-col">
        <span className=" text-center font-semibold">Mengapa Pesan Paket Umroh di {process.env.NEXT_PUBLIC_APP_NAME}?</span>
        <Card className="p-3">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5 items-center">
              <Image loading="eager" placeholder="blur" blurDataURL={search.blurDataURL} src={search} alt="Promo 1" className="w-[128px] md:w-[256px] h-auto" width={100} height={100} />
              <span className="text-center font-semibold">Pencarian Paket Yang Lengkap</span>
              <p className="text-black/60 text-justify">Anda dapat menemukan berbagai pilihan paket yang sesuai dengan kebutuhan dan anggaran Anda. Mulai dari paket ekonomis hingga paket premium, semua tersedia dalam satu platform.</p>
            </div>
            <div className="flex flex-col gap-1.5 items-center">
              <Image loading="eager" placeholder="blur" blurDataURL={comparison.blurDataURL} src={comparison} className="w-[128px] md:w-[256px] h-auto" alt="Promo 1" width={200} height={300} />

              <span className="text-center font-semibold">Dapat Membandingkan Paket</span>
              <p className="text-black/60 text-justify">Informasi detail mengenai akomodasi, transportasi, dan layanan lainnya disajikan secara jelas untuk membantu Anda membuat keputusan yang tepat. </p>
            </div>
            <div className="flex flex-col gap-1.5 items-center">
              <Image loading="eager" placeholder="blur" blurDataURL={monitoring.blurDataURL} src={monitoring} alt="Promo 1" className="w-[128px] md:w-[256px] h-auto" width={200} height={300} />

              <span className="text-center font-semibold">Dapat Memantau Pesanan Secara Lengkap</span>
              <p className="text-black/60 text-justify">
                Dengan fitur pemantauan pesanan yang lengkap, Anda bisa melacak status pesanan Anda setiap saat. Informasi mengenai pembayaran, jadwal keberangkatan, dan detail perjalanan dapat diakses secara real-time melalui akun Anda.
              </p>
            </div>
            <div className="flex flex-col gap-1.5 items-center">
              <Image loading="eager" placeholder="blur" blurDataURL={padlock.blurDataURL} src={padlock} alt="Promo 1" className="w-[128px] md:w-[256px] h-auto" width={200} height={300} />

              <span className="text-center font-semibold">Aman dan Terpercaya</span>
              <p className="text-black/60 text-justify">Dengan pengalaman dan dedikasi kami, Anda dapat menjalani ibadah dengan tenang, mengetahui bahwa semua aspek perjalanan Anda berada di tangan yang aman dan terpercaya.</p>
            </div>
            {/* <div className="flex flex-col gap-1.5 items-center col-span-1 md:col-span-2">
              <Image loading="eager" src={'https://www.umroh.com/paket.png'} alt="Promo 1" width={200} height={300} />
              <span className="text-center">Biaya Paket Umroh Termurah</span>
              <p className="text-black/60 text-center w-[400px]">Pemesanan paket umroh Anda langsung ditujukan ke biro umroh, tanpa melalui perantara/agent sehingga memastikan anda mendapatkan harga terbaik.</p>
            </div> */}
          </div>
        </Card>
      </div>
    </section>
  );
}
