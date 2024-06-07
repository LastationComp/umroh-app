"use client";
import SubmitButton from "@/components/builder/SubmitButton";
import Alert from "@/components/callback/Alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { resetPassword } from "../action";
import { delay } from "@/lib/Promise/Delay";
import { toast } from "react-toastify";

const initialState: any = {
  type: "error",
  message: "",
};
export default function ResetPasswordForm({ token }: { token: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    formData.set("type", "reset_password");
    const result = await resetPassword(formData);
    await delay(1000);
    if (result.type === "success") {
      toast.success("Berhasil Mengubah Password!");
      return router.push("/masuk");
    }

    return toast.error(result.message);
  };
  return (
    <section>
      <form
        action={handleSubmit}
        className="flex flex-col gap-3 max-w-lg md:w-md lg:w-lg"
      >
        <span>Silahkan masukkan Password Baru Anda</span>

        <input type="hidden" name="token" value={token} />
        <input
          type="hidden"
          name="hash"
          value={searchParams.get("hash") ?? ""}
        />

        <div className="grid gap-1.5">
          <Label htmlFor="new-password" className="flex">
            Password Baru
          </Label>
          <Input
            required
            type="password"
            id="new-password"
            placeholder="Masukkan Password Baru"
            name="new_password"
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="new-password" className="flex">
            Konfirmasi Password Baru
          </Label>
          <Input
            required
            type="password"
            id="re-password"
            placeholder="Masukkan Password Baru"
            name="re_password"
          />
        </div>
        <SubmitButton>Reset Password</SubmitButton>
      </form>
    </section>
  );
}
