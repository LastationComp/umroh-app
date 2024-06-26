"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBlurUserAvatar, getUserAvatar } from "@/lib/Handling/getUserAvatar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MonitoringPacketCard({ data }: { data?: any }) {
  return (
    <Card className="">
      <Image
        loading="lazy"
        placeholder="blur"
        blurDataURL={"/api/image/blur?url=" + data?.gallery?.image_url}
        alt={data?.gallery?.title}
        src={data?.gallery?.image_url}
        width={400}
        className="object-cover h-[100px] w-full rounded-t-lg"
        style={{
          objectFit: "cover",
          width: "full",
          height: "100px",
        }}
        height={100}
      />
      <CardHeader>
        <CardTitle>
          <Link
            title={data?.title}
            href={"packets/" + data?.id}
            className="hover:text-blue-600 line-clamp-1"
          >
            {data?.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="outline-dashed outline-offset-5 outline-1 outline-gray rounded-lg p-5 bg-gray-100 flex justify-between">
          <div className="flex items-center relative min-h-[40px] w-full">
            {data?.comparison &&
              data?.comparison.map((user: any, index: number) => (
                <Image
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={getBlurUserAvatar(user?.image)}
                  alt={user?.name ?? "Tidak Diketahui"}
                  title={user?.name ?? "Tidak Diketahui"}
                  src={getUserAvatar(user?.image)}
                  width={100}
                  className={cn(
                    "object-cover outline cursor-pointer outline-1 outline-blue-dark bg-fixed w-40 h-40 rounded-full",
                    "z-" + (index + 1) * 10,
                    "-mr-[1.5rem]"
                  )}
                  style={{
                    objectFit: "cover",
                    width: "40px",
                    height: "40px",
                  }}
                  height={100}
                />
              ))}
            {data?.comparison_count > data?.comparison?.length && (
              <div
                className={cn(
                  "object-cover relative outline bg-yellow-400 cursor-pointer outline-1 outline-blue-dark w-10 h-10 rounded-full",
                  "z-[70]",
                  "-mr-[1.5rem]"
                )}
              >
                <div className="absolute inset-0">
                  <span
                    className="text-black/70 items-center flex w-full h-full justify-center"
                    title={
                      data?.comparison_count -
                      data?.comparison?.length +
                      " Lainnya"
                    }
                  >
                    +{data?.comparison?.length - data?.comparison?.length}
                  </span>
                </div>
              </div>
            )}
            {data?.comparison_count === 0 && (
              <span className="flex items-center justify-center">
                Belum ada yang membandingkan.
              </span>
            )}
          </div>
          <Button variant={"ghost"} className="hover:bg-gray-200" asChild>
            <Link href={"packets/" + data?.id}>Lihat Detail</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
