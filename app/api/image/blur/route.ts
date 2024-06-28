'use server';
import { getBlurImage } from '@/lib/Services/blurImage';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const result = await getBlurImage(searchParams.get('url') ?? '');
  // console.log(result)
  return new NextResponse(result);
}
