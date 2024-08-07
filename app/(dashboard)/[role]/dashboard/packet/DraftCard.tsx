"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { Attributes, useContext, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CiMenuKebab } from "react-icons/ci";
import { Clamping } from "@/lib/String/Clamping";
import SAlertContext from "@/components/context/ShadAlert";
import { cancelDraft } from "./action";
import { toast as toastify } from "react-toastify";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import { mutateArray } from "@/lib/Handling/Mutation";
import { usePagination } from "@/lib/Zustands/Pagination";
export default function DraftCard({
  data,
  index,
  setPagination,
}: {
  data: any;
  index?: React.Key;
  setPagination?: any;
}) {
  const SAlert = useContext(SAlertContext);
  const router = useRouter();
  const decPage = usePagination((state) => state.decPage);
  const draftPage = usePagination((state) => state.draft);
  const updateAction = (e: any, hrefValue: string) => {
    e.preventDefault();
    nProgress.start();
    return router.push(hrefValue);
  };

  const deletePacket = (id: string) => {
    SAlert.trigger({
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      title: "Apakah kamu yakin ingin menghapus paket ini?",
      text: "Kamu akan kehilangan paket ini selamanya.",
      icon: "warning",
      async onSuccess() {
        const result = await cancelDraft(id);

        if (!result) return;
        // await mutate((key) => Array.isArray(key) && key[0] === '/api/dashboard/travel/packets?is_publish=0');
        await mutateArray("/api/dashboard/travel/packets?is_publish=0");
        if (index === 1 && draftPage !== 1) decPage("draft");
        return toastify.success("Paket Berhasil Dihapus!");
      },
    });
  };
  return (
    <Card key={index}>
      <CardHeader>
        <section className="flex justify-between gap-3 w-full">
          <div>
            <CardTitle>
              {Clamping(data?.title ?? "Draft " + index, 30)}
            </CardTitle>
            <CardDescription>
              {Clamping(data?.description ?? "Tidak ada deskripsi...", 30)}
            </CardDescription>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="text-lg">
                <CiMenuKebab />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"end"}>
              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={(e) =>
                  updateAction(e, "packet/" + data?.id + "/draft")
                }
              >
                Ubah Draft
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => deletePacket(data?.id)}
              >
                Hapus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </CardHeader>
    </Card>
  );
}
