"use server";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import sharp from "sharp";

function bufferToBase64(buffer: string): string {
  return `data:image/jpeg;base64,${buffer}`;
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  // const result = await getBlurImage(searchParams.get("url") ?? "");
  // const response = await fetch(searchParams.get("url") ?? "");
  // const buffer = await response.arrayBuffer();

  const pathfile = path.join(process.cwd(), "public", "assets", "newLogo.png");
  const buffer = fs.readFileSync(pathfile);
  const sharping = await sharp(buffer).resize(10, 10).toBuffer();
  // .then((res) => res.toString("base64"));
  return new NextResponse(sharping);
}
