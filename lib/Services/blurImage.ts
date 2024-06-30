'use server';
// import sharp from '@img/sharp-win32-x64'
import { Image } from 'image-js';
import Jimp from 'jimp';
function bufferToBase64(buffer: Buffer | string): string {
  return `data:image/*;base64,${buffer.toString('base64')}`;
}

export async function getBlurImage(url: string) {
  const res = await fetch(url, { cache: 'no-store' });

  const jimp = await Jimp.read(Buffer.from(await res.arrayBuffer()));
  const blur = await jimp.resize(20, 20).blur(20).getBufferAsync(Jimp.MIME_JPEG);
  // const image = Image.load(Buffer.from(await res.arrayBuffer())).then((result) => {
  //   return result.resize({ width: 20 }).blurFilter({ radius: 10 }).toBuffer();
  // });

  return blur;
}
