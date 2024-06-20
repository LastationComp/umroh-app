"use server";

import sharp from "sharp";

function bufferToBase64(buffer: Buffer): string {
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export async function getBlurImage(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  const imageBuffer = Buffer.from(await res.arrayBuffer());

  const resizedBuffer = await sharp(imageBuffer).resize(20).toBuffer();

  return bufferToBase64(resizedBuffer);
}
