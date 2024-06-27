'use server';
import { Blob } from 'buffer';
// import sharp from 'sharp'
import Jimp from 'jimp';
function bufferToBase64(buffer: Buffer): string {
  return `data:image/*;base64,${buffer.toString('base64')}`;
}

export async function getBlurImage(url: string) {
  const res = await fetch(url, { cache: 'no-store' });

  const jimp = await Jimp.read(Buffer.from(await res.arrayBuffer()));
  const blur = await jimp.resize(20, 20).blur(20).getBufferAsync(Jimp.MIME_JPEG);
  // const resizedBuffer = await sharp(url).resize(20).toBuffer();

  return bufferToBase64(blur);
}
