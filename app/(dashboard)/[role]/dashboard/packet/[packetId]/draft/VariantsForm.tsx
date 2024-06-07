'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import React, { useCallback, useEffect, useId, useReducer, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { arrayReducer, stringReducer } from '@/lib/Handling/reducer';
import { inputName } from '@/lib/String/ArrayString';
import { Slug } from '@/lib/String/Packet';
import { toast } from 'react-toastify';
import { NumericFormat } from 'react-number-format';

const initialData = [
  {
    id: null,
    title: 'Paket',
    slug: 'paket',
    type: 'single',
    is_active: true,
    is_primary: true,
    details: [
      {
        name: 'Double',
        price: 0,
      },
      {
        name: 'Triple',
        price: 0,
      },
      {
        name: 'Quad',
        price: 0,
      },
    ],
  },
];

export default function VariantsForm({ data = [] }: { data?: any[] }) {
  const [variants, dispatch] = useReducer(arrayReducer, data.length !== 0 ? data : initialData);
  const [packetName, setPacketName] = useState('');

  const [open, setOpen] = useState(false);
  const activeVariantDetailsId = useId();

  const addOns = () => {
    const find = variants?.find((variant: any) => variant.slug === Slug(packetName));

    if (find) return toast.error('Nama Paket sudah ada!');
    dispatch({
      type: 'add',
      data: {
        title: packetName,
        slug: Slug(packetName),
        is_primary: false,
        is_active: true,
        type: 'single',
        details: [{}],
      },
    });

    setOpen(!open);
    setPacketName('');
  };

  const addOptionAddons = (slug: string) => {
    dispatch({
      type: 'add_children',
      identifier: 'title',
      value: slug,
      data: {
        is_primary: false,
      },
    });
  };

  const removeOptionAddons = (slug: string) => {
    dispatch({
      type: 'remove_children',
      identifier: 'title',
      value: slug,
    });
  };

  const removeVariant = (slug: string) => {
    dispatch({
      type: 'removeById',
      id: 'title',
      value: slug,
    });
  };

  useEffect(() => {
    if (data.length === 0) return;
    dispatch({
      type: 'reFetch',
      data: data,
    });
  }, [data]);
  return (
    <section className="grid gap-3 md:w-1/2">
      <span>Variasi</span>

      <Card className="flex flex-col p-3 gap-5">
        <div className="flex items-center gap-3">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button type="button">Tambah Add-Ons</Button>
            </DialogTrigger>

            <DialogContent className="grid gap-1.5 max-w-lg">
              <Label htmlFor="packet-name">Nama Add-Ons</Label>
              <Input id="packet-name" placeholder="Masukkan Disini" value={packetName} onChange={(e) => setPacketName(e.target.value)} />
              <div className="flex items-center gap-3 justify-end">
                <Button type="button" onClick={addOns}>
                  Tambahkan
                </Button>
                <Button type="button" variant={'ghost'} onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {variants?.map((varian: any, index: number) => {
          return (
            <Card className="flex flex-col gap-3 p-3" key={index}>
              <div className="flex items-center gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-semibold">{varian.title}</span>
                </div>
                {index !== 0 && (
                  <Button variant={'destructive'} type="button" onClick={() => removeVariant(varian?.title)}>
                    Hapus
                  </Button>
                )}
              </div>
              <div className="flex items-center gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center space-x-2">
                    <Switch id={activeVariantDetailsId + index} defaultChecked={varian?.is_active ?? true} name={inputName('variants', index, 'is_active')} />
                    <Label htmlFor={activeVariantDetailsId + index}>Aktif</Label>
                  </div>
                </div>
                <input type="hidden" name={inputName('variants', index, 'id')} value={varian?.id ?? index} readOnly />
                <input type="hidden" name={inputName('variants', index, 'title')} value={varian?.title ?? ''} readOnly />
                <input type="hidden" name={inputName('variants', index, 'is_primary')} value={varian?.is_primary ?? true} readOnly />

                <div className="flex items-center space-x-2">
                  <Switch id="multi-choice" disabled={index === 0} defaultChecked={varian?.type === 'multiple'} name={inputName('variants', index, 'type')} />
                  <Label htmlFor="multi-choice">Multi Choice</Label>
                </div>
              </div>
              <Separator />
              <div className="flex gap-3 items-stretch w-full ">
                <span className="text-sm w-full">Opsi</span>
                <span className="text-sm w-full">Harga</span>
              </div>
              <div className="flex flex-col gap-3">
                {varian?.details?.map((detail: any, indexDetail: number) => (
                  <div className="grid gap-1" key={indexDetail}>
                    <div className="flex gap-3 items-center" key={indexDetail}>
                      <Input type="text" required defaultValue={detail?.name} name={inputName('variants_details', index, indexDetail, 'name')} placeholder="Masukkan Opsi Varian Paket disini..." />
                      {/* <Input type="number" required defaultValue={detail?.price} name={inputName('variants_details', index, indexDetail, 'price')} placeholder="Masukkan Harga disini..." /> */}
                      <NumericFormat
                        customInput={Input}
                        allowLeadingZeros={false}
                        valueIsNumericString={true}
                        placeholder="Masukkan Harga disini..."
                        defaultValue={detail?.price}
                        name={inputName('variants_details', index, indexDetail, 'price')}
                        decimalSeparator=","
                        thousandSeparator="."
                      />
                      <input type="hidden" name={inputName('variants_details', index, indexDetail, 'id')} readOnly value={detail?.id ?? indexDetail} />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id={activeVariantDetailsId} defaultChecked={detail?.is_active ?? true} name={inputName('variants_details', index, indexDetail, 'is_active')} />
                      <Label htmlFor={activeVariantDetailsId}>Aktif</Label>
                    </div>
                  </div>
                ))}
                {index !== 0 && (
                  <div className="flex gap-3 items-center">
                    <Button onClick={() => addOptionAddons(varian?.title ?? '')} type={'button'}>
                      Tambah
                    </Button>
                    {varian?.details?.length > 1 && (
                      <Button type="button" onClick={() => removeOptionAddons(varian?.title ?? '')} variant={'destructive'}>
                        Hapus
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </Card>
    </section>
  );
}
