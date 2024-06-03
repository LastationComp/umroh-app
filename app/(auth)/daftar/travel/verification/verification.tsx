"use client";
import { showAlert } from "@/components/context/ShadAlert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { cancelTravel, reRegisterTravel, toDashboard } from "../action";
import nProgress from "nprogress";
import { useSession } from "next-auth/react";

export default function Verification({ state = 0 }: { state?: number }) {
  const router = useRouter();
  const { update } = useSession();

  const cancelApproval = () => {
    return showAlert({
      title: "Apakah kamu yakin?",
      text: "Kamu yakin ingin membatalkan pendaftaran? Tentu kamu bisa mengajukan pendaftaran kembali.",
      icon: "warning",
      confirmButtonText: "Batalkan",
      cancelButtonText: "Tidak",
      onSuccess: async () => {
        const result = await cancelTravel();
        if (!result)
          return showAlert({ icon: "error", title: "Terjadi Kesalahan" });

        return router.refresh();
      },
    });
  };

  const reqRegisterTravel = async () => {
    const reqRegister = await reRegisterTravel();

    if (!reqRegister) return;
  };

  const redirectToDashboard = async () => {
    nProgress.start();

    await update({
      role: "travel",
    });

    await toDashboard();
  };
  if (state === 0)
    return (
      <section className="flex flex-col items-center justify-center">
        <span>Sedang Menunggu Verifikasi...</span>
        <span className="text-sm text-black/60 text-center">
          Mohon ditunggu ya. Kami sedang memverifikasi data kamu.
        </span>
        <div className="flex gap-3">
          <Button variant={"link"} asChild>
            <Link href={"/"} className="items-center my-auto">
              Kembali ke Halaman
            </Link>
          </Button>

          <Separator orientation={"vertical"} className="h-8 my-auto" />
          <Button
            onClick={cancelApproval}
            variant={"link"}
            className="items-center my-auto text-red-600"
          >
            Batalkan Pendaftaran
          </Button>
        </div>
      </section>
    );

  if (state === 2)
    return (
      <section className="flex flex-col items-center justify-center">
        <span className="text-red-600">Verifikasi Ditolak!</span>
        <span className="text-sm text-black/60 text-center">
          Yah, verifikasi kamu ditolak {":("}. Tapi tenang saja! Kamu masih bisa
          mengajukan pendaftaran kembali. Jangan lupa pastikan berkas-berkasmu
          terisi dengan baik.
        </span>
        <div className="flex gap-3">
          <Button variant={"link"} asChild>
            <Link href={"/"} className="items-center my-auto">
              Kembali ke Halaman
            </Link>
          </Button>

          <Separator orientation={"vertical"} className="h-8 my-auto" />
          <Button
            onClick={reqRegisterTravel}
            variant={"link"}
            className="items-center my-auto text-blue-600"
          >
            Ajukan Pendaftaran Ulang
          </Button>
        </div>
      </section>
    );

  if (state === 1)
    return (
      <section className="flex flex-col items-center justify-center">
        <span className="text-green-600">Verifikasi Sudah Berhasil!</span>
        <span className="text-sm text-black/60 text-center">
          Selamat! Kamu berhasil bergabung dengan kami sebagai Partner. Silahkan
          kunjungi dashboard kamu untuk melakukan aktivitas.
        </span>
        <div className="flex gap-3">
          <Button variant={"link"} asChild>
            <Link href={"/"} className="items-center my-auto">
              Kembali ke Halaman
            </Link>
          </Button>

          <Separator orientation={"vertical"} className="h-8 my-auto" />
          <Button
            onClick={redirectToDashboard}
            variant={"link"}
            className="items-center my-auto text-blue-600"
          >
            Masuk Dashboard
          </Button>
        </div>
      </section>
    );
}
