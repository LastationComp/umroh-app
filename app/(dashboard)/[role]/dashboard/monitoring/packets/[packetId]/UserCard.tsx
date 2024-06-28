import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlurUserAvatar, getUserAvatar } from "@/lib/Handling/getUserAvatar";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import Image from "next/image";
import React, { useId } from "react";

export default function UserCard({
  user,
  index,
}: {
  user: any;
  index: number;
}) {
  return (
    <Card key={index}>
      <CardHeader>
        <section className="flex justify-start items-center gap-1.5 w-full h-full">
          <Image
            loading="lazy"
            placeholder="blur"
            blurDataURL={getBlurUserAvatar(user?.image)}
            alt={user?.name ?? "Tidak Diketahui"}
            title={user?.name ?? "Tidak Diketahui"}
            src={getUserAvatar(user?.image)}
            width={100}
            className={cn(
              "max-md:hidden object-cover outline cursor-pointer outline-1 outline-blue-dark rounded-full",
              "self-stretch"
            )}
            style={{
              minWidth: "40px",
              maxWidth: "40px",
              maxHeight: "40px",
            }}
            height={100}
          />
          <div className="w-full h-full">
            <CardTitle>{user?.name}</CardTitle>
            <CardDescription>{user?.phone_number}</CardDescription>
          </div>
        </section>
      </CardHeader>
    </Card>
  );
}
