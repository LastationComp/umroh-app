'use client';
import GetHotelFacilities from '@/components/facilities/GetHotelFacilities';
import GetStar from '@/components/global/GetStar';
import HotelsGalleries from '@/components/images/HotelsGalleries';
import LoadingUI from '@/components/Suspense/Loading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { fetcher } from '@/lib/Fetcher';
import React, { useEffect, useState, useTransition } from 'react';
import useSWR from 'swr';
import { createPacketHotel } from '../../action';
import CardLoading from '@/components/Suspense/CardLoading';
import { Separator } from '@/components/ui/separator';

export default function HotelsForm({ hotels, packetId }: { hotels: any[]; packetId: string }) {
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition();
  const [dataHotels, setDataHotels] = useState(hotels);
  const [open, setOpen] = useState(false);
  const { data: hotelsData } = useSWR(`/api/data/hotels?q=${search}`, fetcher, {
    keepPreviousData: false,
  });

  const hotelsIds = hotels.map((hotel) => hotel.id);
  const clickHotel = (hotelId: string) => {
    startTransition(async () => {
      let formData = new FormData();

      formData.set('id', hotelId);
      const result = await createPacketHotel(packetId, formData);

      setOpen(false);

      return setSearch('');
    });
  };

  const filterHotel = (hotel: any) => {
    const find = hotelsIds.find((id) => id === hotel.id);
    if (find) return false;

    return true;
  };

  const deleteHotel = (id: string) => {
    const resultData = dataHotels.filter((hotel) => hotel.id !== id);
    setDataHotels(resultData);
  };

  useEffect(() => {
    setDataHotels(hotels);
  }, [hotels]);
  return (
    <div className="grid gap-3 w-auto md:w-1/2">
      <span>Hotel</span>

      <section className="grid gap-3 w-full">
        {dataHotels.map((hotel, index) => {
          return (
            <Card className="rounded-sm p-3" key={index}>
              <div key={index} className="flex max-md:flex-col gap-3 items-center justify-between">
                <div className="grid gap-1.5 w-full">
                  <div className="flex items-center gap-3">
                    <span>{hotel.name}</span>
                    <Separator orientation={'vertical'} />
                    <GetStar value={hotel.class} />
                  </div>
                  <CardDescription>{hotel.location}</CardDescription>
                  <Input type="hidden" name="hotel_id[]" value={hotel.id} />
                </div>
                <div className="flex items-center gap-3 w-full">
                  <div className="grid gap-1.5 w-full">
                    <Label htmlFor="price_hotel">Harga</Label>
                    <Input id="price_hotel" name="price_hotel[]" type="number" required defaultValue={Number(hotel?.pivot?.price ?? 0)} placeholder="Masukkan Harga Tambah..." />
                  </div>
                  <Button type="button" variant={'destructive'} onClick={() => deleteHotel(hotel.id)}>
                    Hapus
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </section>
      <section className="flex">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Tambah Hotel</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Hotel</DialogTitle>
              <DialogDescription>Pilih hotel untuk menambahkan.</DialogDescription>
            </DialogHeader>
            <div className="flex justify-between gap-3">
              <div className="grid gap-1.5 w-full">
                <Input placeholder="Masukkan Nama Hotel" onChange={(e) => setSearch(e.target.value)} />
              </div>
            </div>

            <div className="grid gap-3">
              {hotelsData && hotelsData.filter(filterHotel).length === 0 && <span>Tidak ada hotel yang bisa dipilih.</span>}
              {!hotelsData && <LoadingUI />}
              {hotelsData &&
                hotelsData.filter(filterHotel).map((hotel: any, index: number) => {
                  if (index === 0)
                    return (
                      <Card key={index} className="relative">
                        <CardLoading isLoading={isPending} />
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <CardTitle>{hotel.name}</CardTitle>
                          </div>
                          <CardDescription>
                            <GetStar value={hotel.class} />
                          </CardDescription>
                          <CardDescription>{hotel.location}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                          <HotelsGalleries images={hotel.hotel_gallery} />
                          <GetHotelFacilities data={hotel.hotel_facilities} />
                        </CardContent>
                        <CardFooter className="flex justify-start">
                          <Button type="button" onClick={() => clickHotel(hotel.id)}>
                            Pilih
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                })}
            </div>
            <DialogFooter className="flex items-center justify-end gap-3">
              <Button variant={'outline'} type="button" onClick={() => setOpen(!open)}>
                Batal
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}
