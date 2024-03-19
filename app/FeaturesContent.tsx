import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

export default function FeaturesContent() {
  return (
    <section className="md:container md:mx-auto mx-3">
      <div className="flex justify-center my-3 gap-3 flex-col">
        <span className="text-[24px] text-center">Mengapa Pesan Paket Umroh di Umroh.ai</span>
        <Card className="p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col items-center">
              <Image src={'https://www.umroh.com/jaminan.png'} alt="Promo 1" width={200} height={300} />
              <span className="text-[20px] text-center">Jaminan Berangkat dan Pembayaran Aman</span>
              <p className="text-black/60 text-center">Dana aman 100% dan hanya kami bayarkan kepada biro umroh setelah anda mendapatkan Kode PNR Penerbangan.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={'https://www.umroh.com/fasilitas.png'} alt="Promo 1" width={200} height={300} />
              <span className="text-[20px] text-center">Fasilitas saat Ibadah Umroh</span>
              <p className="text-black/60 text-center">Nikmati fasilitas seperti gratis biaya pembuatan atau perpanjangan Paspor, Internet Provider selama ibadah umroh.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={'https://www.umroh.com/promo.png'} alt="Promo 1" width={200} height={300} />
              <span className="text-[20px] text-center">Promo Spesial Setiap Bulannya</span>
              <p className="text-black/60 text-center">Dapatkan harga termurah dan potongan harga paket Umroh</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={'https://www.umroh.com/cicilan.png'} alt="Promo 1" width={200} height={300} />
              <span className="text-[20px] text-center">Fitur Down Payment dan Cicilan Tanpa Bunga</span>
              <p className="text-black/60 text-center">Anda dapat memesan paket umroh yang Anda inginkan dengan DP Rp.5.000.000, dilanjutkan dengan pelunasan pembayaran yang harus diselesaikan Sebulan sebelum keberangkatan</p>
            </div>
            <div className="flex flex-col items-center col-span-1 md:col-span-2">
              <Image src={'https://www.umroh.com/paket.png'} alt="Promo 1" width={200} height={300} />
              <span className="text-[20px] text-center">Biaya Paket Umroh Termurah</span>
              <p className="text-black/60 text-center w-[400px]">Pemesanan paket umroh Anda langsung ditujukan ke biro umroh, tanpa melalui perantara/agent sehingga memastikan anda mendapatkan harga terbaik.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
