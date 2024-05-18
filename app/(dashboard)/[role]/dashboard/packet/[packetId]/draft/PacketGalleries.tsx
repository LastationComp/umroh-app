'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React, { ChangeEvent, createRef, useState, useTransition } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import PopupSliders from '@/components/images/PopupSliders';
import { Button } from '@/components/ui/button';
import DeleteButton from '@/components/global/DeleteButton';
import { delay } from '@/lib/Promise/Delay';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useToast } from '@/components/ui/use-toast';
import { uploadGallery } from '../../action';

export default function PacketGalleries({ images, packetId }: { images: any[]; packetId: string }) {
  const [slide, setSlide] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);
  const [uploading, startTransition] = useTransition();
  const { toast } = useToast();
  const fileImage = createRef<HTMLInputElement>();
  const imagesData = images.map((image) => {
    return {
      original: image.image_url,
      thumbnail: image.image_url,
      originalClass: 'max-h-[36rem]',
    };
  });

  const openImage = () => {
    fileImage.current?.click();
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleUploadImage();
  };

  const handleUploadImage = () => {
    startTransition(async () => {
      const formData = new FormData();
      if (fileImage.current?.files) formData.set('image', fileImage.current?.files[0]);
      const result = await uploadGallery(packetId, formData);
      if (result.type === 'error') return;

      toast({
        title: 'Gambar Berhasil Diupload',
        className: 'bg-green-600 text-white',
      });
    });
  };
  return (
    // <form action={handleUploadImage} ref={form}>
    <section className="w-auto">
      <PopupSliders open={openGallery} onOpenChange={setOpenGallery} currentSlide={slide} data={imagesData} />
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
          align: 'start',
        }}
        className=""
      >
        <CarouselContent className="w-auto">
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-12/12 md:basis-6/12 lg:basis-3/12 xl:basis-2/12 max-w-[200px]">
              <div className="p-3 cursor-pointer bg-white shadow border border-1 flex items-center trigger-tooltip-image relative ">
                <Image
                  src={image.image_url}
                  onClick={() => {
                    setSlide(index);
                    setOpenGallery(!openGallery);
                  }}
                  className=" rounded transition border-black w-full h-[150px] object-cover"
                  alt={'Galeri ' + index}
                  width={150}
                  height={150}
                />
                <section className="absolute top-4 right-4 tooltip-image">
                  <DeleteButton endpoint={'/api/travel/travel-packet/' + packetId + '/galleries/' + image.id + '?url=' + image.image_url} refreshOnTag={'travel-packet-galleries'} message="Apakah anda ingin menghapus gambar ini?" />
                </section>
              </div>
            </CarouselItem>
          ))}
          <CarouselItem className="basis-12/12 md:basis-6/12 lg:basis-3/12 xl:basis-2/12 ">
            <div className="p-3 cursor-pointer bg-white shadow border border-1 h-full flex items-center justify-center ">
              <input type="file" className="hidden" onChange={onChangeImage} name="image" ref={fileImage} id="" />
              <Button role="button" type="button" aria-label="Upload Gambar" onClick={openImage} disabled={uploading} className="flex items-center gap-3">
                {uploading && <AiOutlineLoading3Quarters className={uploading ? 'animate-spin' : ''} />}
                {uploading ? 'Uploading...' : 'Upload Gambar'}
              </Button>
              {/* <Button type="submit" className="hidden" ref={button}></Button> */}
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="-ml-5" />
        <CarouselNext className="-mr-5" />
      </Carousel>
    </section>
    // </form>
  );
}
