"use server";
import Jimp from "jimp";
import sharp from "sharp";
function bufferToBase64(buffer: string): string {
  return `data:image/jpeg;base64,${buffer}`;
}

export async function getBlurImage(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  // const jimp = await Jimp.read(Buffer.from(await res.arrayBuffer()));
  // const blur = await jimp
  //   .resize(20, 20)
  //   .blur(20)
  //   .getBufferAsync(Jimp.MIME_JPEG);
  // const image = Image.load(Buffer.from(await res.arrayBuffer())).then((result) => {
  //   return result.resize({ width: 20 }).blurFilter({ radius: 10 }).toBuffer();
  // });

  const resultForSharp = await sharp(await res.arrayBuffer())
    .resize(10, 10)
    .toBuffer();
  // .toBuffer()
  // .then((res) => res.toString("base64"));
  return bufferToBase64(resultForSharp.toString('base64'));
}
