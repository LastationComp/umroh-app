'use client';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import avatar from '@/public/profile/avatar.png';
import { FaCheck } from 'react-icons/fa';
import { delay } from '@/lib/Promise/Delay';
import SubmitButton from '@/components/builder/SubmitButton';
import { updateAccount } from './action';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { socket } from '@/lib/Services/socket';
import imageCompression from 'browser-image-compression';
import { toast } from 'react-toastify';
import { useProfileAvatar } from '@/lib/Zustands/Profile';

const initialState = {
  type: 'success',
  message: '',
  is_update_image: false,
  image: '',
};

export default function AccountForm({ data }: { data: any }) {
  const [urlImage, setUrlImage] = useState(data?.image);
  const [state, setState]: any = useState(initialState);
  const setAvatar = useProfileAvatar((state) => state.setProfileAvatar);
  const router = useRouter();
  const { data: session, update } = useSession();
  const fileImage = createRef<HTMLInputElement>();
  const handleClick = (e: any) => {
    fileImage.current?.click();
  };
  const handleImage = (e: any) => {
    if (!e.target.files[0]) return;
    const image = URL.createObjectURL(e.target.files[0]);
    setUrlImage(image ?? '');
  };

  const handleSubmit = async (formData: FormData) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1000,
      useWebWorker: true,
      fileType: 'image/webp',
    };

    const imageFile = formData.get('image') as File;
    if (imageFile.size !== 0) {
      const compressedFile = await imageCompression(imageFile, options);
      formData.set('image', compressedFile as File);
    }

    await delay(1000);
    const result = await updateAccount(formData);
    setState(result);

    if (!result.success) return toast.error(result.message);

    if (result.success) {
      toast.success(result.message);
    }

    let data: any = {
      isEmailVerified: result.is_email_verified,
      isPhoneVerified: result.is_phone_verified,
    };

    if (result.is_update_image === true) {
      data = {
        ...data,
        image: result.image,
        picture: result.image,
      };

      // socket.emit('change-image', {
      //   id: session?.user.id,
      //   image: result.image,
      // });

      setAvatar(result.image);
    }
    if (!result.is_email_verified)
      setState({
        ...state,
        message: 'Kamu Mengubah Email, akan segera diarahkan ke halaman verifikasi',
      });

    await update(data);

    if (!result.is_email_verified) return router.push('/');
    return router.refresh();
  };

  return (
    <section>
      <form action={handleSubmit} onSubmit={() => setState(initialState)} className="flex gap-3 md:divide-x w-auto max-md:flex-col max-md:flex-col-reverse place-content-stretch">
        <div className="grid w-full max-md:gap-3 h-auto">
          <div className="grid items-center max-md:gap-1.5 w-full">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type={'email'} name="email" defaultValue={data.email} placeholder="Masukkan Email anda..." />
            {data.is_email_verified === 1 && (
              <span className="text-sm md:-mt-3 text-green-600 flex items-center gap-1.5">
                <FaCheck />
                Terverifikasi
              </span>
            )}
          </div>
          <div className="grid items-center max-md:gap-1.5 w-full">
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input id="phone-number" type={'number'} name="phone_number" defaultValue={data.phone_number} placeholder="Masukkan Nomor Telepon anda..." />
            {data.is_phone_verified === 1 && (
              <span className="text-sm md:-mt-3 text-green-600 flex items-center gap-1.5">
                <FaCheck />
                Terverifikasi
              </span>
            )}
            <div className="flex">
              <SubmitButton>Simpan</SubmitButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-3 w-full">
          <div className="flex flex-col items-center gap-3">
            <Image src={urlImage === 'default.jpg' ? avatar : urlImage} className="w-[8rem] h-[8rem] object-cover rounded-full cursor-pointer" width={1024} height={1024} alt={data.name} onClick={handleClick} />

            <input type="file" accept="image/*" ref={fileImage} onChange={handleImage} className="hidden" name="image" id="image" />
            <Button type={'button'} variant={'outline'} onClick={handleClick}>
              Pilih Gambar
            </Button>
            <span className="text-sm text-black/60">Ukuran Maks. : 1MB</span>
            <span className="text-sm text-black/60">Format Gambar : .jpg, .png</span>
          </div>
        </div>
      </form>
    </section>
  );
}
