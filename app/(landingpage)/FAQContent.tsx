'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

export default function FAQContent() {
  return (
    <section className="md:container md:mx-auto mx-3 my-5">
      <span className="text-xl font-semibold ">{process.env.NEXT_PUBLIC_APP_NAME} – Pilihan Utama untuk Perjalanan Umroh dan Haji yang Aman</span>
      <p className="text-sm leading-7 my-5 text-black/70">
        {process.env.NEXT_PUBLIC_APP_NAME} menjadi pilihan utama karena kami mengutamakan keamanan dalam setiap aspek perjalanan umroh dan haji Anda. Dengan kerja sama bersama agen travel terpercaya dan sistem keamanan data yang canggih,
        kami menjamin bahwa setiap perjalanan ibadah Anda dijamin aman dan terpercaya.{' '}
      </p>
      <Accordion type={'multiple'}>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="text-xl font-semibold ">Kemudahan dan Kepastian dalam Memilih Paket Umroh dan Haji</span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm leading-7 text-black/70">
              Di {process.env.NEXT_PUBLIC_APP_NAME}, Anda akan menemukan kemudahan dalam memilih paket umroh dan haji yang sesuai dengan kebutuhan dan budget Anda. Kami menyediakan berbagai opsi paket yang dapat dibandingkan langsung,
              dilengkapi dengan informasi detail mengenai fasilitas, akomodasi, serta layanan yang disediakan agar Anda dapat membuat keputusan yang tepat.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="text-xl font-semibold ">Komunitas Berbagi Pengalaman dan Dukungan</span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm leading-7 text-black/70">
              Bergabunglah dengan komunitas {process.env.NEXT_PUBLIC_APP_NAME} yang penuh harmoni dan kekompakan. Di sini, Anda bisa berbagi pengalaman, tips, dan dukungan dengan sesama calon jamaah dan alumni umroh. Kami juga menyediakan
              forum diskusi dan grup WhatsApp untuk memfasilitasi komunikasi yang lebih mudah antar anggota, sehingga Anda merasa lebih siap dan percaya diri menjalani ibadah umroh dan haji.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
