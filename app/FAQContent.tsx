import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

export default function FAQContent() {
  return (
    <section className="md:container md:mx-auto mx-3 my-5">
      <span className="text-xl font-semibold ">Umroh.ai – Cari Paket Umroh Murah di Indonesia</span>
      <p className="text-sm leading-7 my-5 text-black/70">
        Umroh.ai adalah marketplace yang menyediakan paket umroh lebih dari 100 travel umroh terpercaya di Indonesia dengan izin resmi Kementerian Agama. Ibadah terasa mudah karena tidak lagi pusing untuk mencari travel umroh dan temukan
        paket umroh yang diinginkan. Cari paket umroh dengan mudah dan aman, banyaknya pilihan paket umroh dari berbagai biro umroh terpercaya. Cek berbagai paket umroh pilihamu, ingin paket umroh regular, atau ingin beribadah sekaligus
        berwisata ke Negara islam dengan umroh plus, hingga kamu bisa umroh special bersama ustadz favoritmu. Temukan berbagai paket umroh regular, umroh plus, hingga umroh special. Mudahkan juga perjalanan dengan layanan pembuatan paspor
        online, pembelian paket data, ibadah nyaman semua mudah ditemukan hanya dengan Umroh.ai. Saat ini sudah banyak travel terpercaya yang sudah bergabung dengan kami, Umroh.ai ingin memudahkan umat muslim Indonesia dalam beribadah,
        menghilangkan kekhawatiran dikalangan masyarakat dan memberikan layanan yang terpercaya dan aman. Transaksi aman, ibadah nyaman bersama Umroh.ai
      </p>
      <Accordion type={'multiple'}>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="text-xl font-semibold ">Paket Umroh Dari Travel Terpercaya</span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm leading-7 text-black/70">
              Saat ingin merencanakan perjalanan ibadah umroh hal yang terpenting adalah mencari travel umroh terpercaya, lalu tentukan paket yang susuai dengan keinginan, oleh karena itu Umroh.com hadir untuk membantu anda mewujudkan
              rencana perjalanan ibadah anda. Di Umroh.com anda dapat menemukan berbagai paket umroh dari berbagai travel yang sudah bekerjasama dengan kami tentunya dengan fitur lengkap yang dapat memudahkan anda bertransaksi. Mulailah
              wujudkan rencana perjalanan anda bersama kami.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="text-xl font-semibold ">Temukan Paket Umroh Dengan Promo Special</span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm leading-7 text-black/70">
              Banyak keuntungan yang akan didapatkan dari Umroh.com, berbagai paket dari travel terpercaya serta dapatkan promo menarik yang telah kami sediakan. Diskon hingga free upgrade kamar setiap hari. Jika anda ingin merencanakan
              umroh namun dana belum cukup kami menyediakan cicilan hingga 24 bulan, biaya umroh mulai dari 500ribu/bulan. Sepanjang tahun Umroh.com terus memberikan pelayanan terbaik untuk memudahkan calon jamaah dan mewujudkan resolusi
              calon jamaah. Jangan lewatkan promo special Umroh.com, bersama kami transaksi aman, ibadah nyaman.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
