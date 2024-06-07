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
import Link from "next/link";
import { Clamping } from "@/lib/String/Clamping";
import SAlertContext from "@/components/context/ShadAlert";
import { cancelDraft } from "./action";
import { toast } from "@/components/ui/use-toast";
import { toast as toastify } from "react-toastify";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
export default function DraftCard({
  data,
  index,
  travel,
}: {
  data: any;
  index?: React.Key;
  travel: any;
}) {
  const SAlert = useContext(SAlertContext);
  const { mutate } = useSWRConfig();
  const travelRole = travel.role;
  let staffCanUpdate = "";
  let staffCanDelete = "";
  const regex = new RegExp("staff");
  const isStaff = regex.test(travelRole);
  const router = useRouter();
  const updateAction = (e: any, hrefValue: string) => {
    e.preventDefault();
    if (isStaff) {
      staffCanUpdate = travel.settings[0].staff_can_update;
      if (!staffCanUpdate) {
        return toastify.error(
          "Anda tidak dapat melakukan Update Packet! \n Silahkan Hubungi Manager Anda!"
        );
      }
    }
    nProgress.start();
    return router.push(hrefValue);
  };

  const deletePacket = (id: string) => {
    if (isStaff) {
      staffCanDelete = travel.settings[0].staff_can_delete;
      if (!staffCanDelete) {
        return toastify.error(
          "Anda tidak dapat melakukan Hapus Packet! \n Silahkan Hubungi Manager Anda!"
        );
      }
    }

    SAlert.trigger({
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      title: "Apakah kamu yakin ingin menghapus paket ini?",
      text: "Kamu akan kehilangan paket ini selamanya.",
      icon: "warning",
      async onSuccess() {
        const result = await cancelDraft(id);

        if (!result) return;
        await mutate('/api/dashboard/travel/packets?is_publish=0');

        return toast.success('Paket Berhasil Dihapus!');
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
