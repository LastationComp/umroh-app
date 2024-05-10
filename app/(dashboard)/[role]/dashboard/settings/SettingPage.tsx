"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import React from "react";
import { saveSettings } from "./action";
import { useToast } from "@/components/ui/use-toast";
import SubmitButton from "@/components/builder/SubmitButton";
export default function SettingPage({ setting }: { setting: any }) {
  const { toast } = useToast();

  const save = async (formData: FormData) => {
    const result = await saveSettings(formData);
    if (!result.success)
      return toast({
        title: result.message,
        className: "bg-red-600 text-white",
      });

    return toast({
      title: result.message,
      className: "bg-green-600 text-white",
    });
  };

  return (
    <form action={save}>
      <Card className="flex flex-col w-full">
        <CardHeader>
          <CardTitle>Pengaturan Travel</CardTitle>
          <CardDescription>Atur Keamanan Travel Kamu.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-5">
          <section className="flex items-center justify-between gap-5">
            <div className="flex flex-col">
              <CardTitle>Staff Dapat Mengubah Paket</CardTitle>
              <CardDescription>
                Paket yang sudah ada nanti dapat diubah oleh Staff.
              </CardDescription>
            </div>
            <Switch
              name="staff_can_update"
              defaultChecked={setting.staff_can_update ?? false}
            />
          </section>
          <section className="flex items-center justify-between gap-5">
            <div className="flex flex-col">
              <CardTitle>
                Staff Dapat{" "}
                <span className="text-red-600">Menghapus Paket</span>
              </CardTitle>
              <CardDescription>
                Paket yang sudah ada nanti dapat{" "}
                <span className="text-red-600">dihapus</span> oleh Staff.{" "}
                <span className="text-yellow-600">
                  Kami sangat menyarankanmu untuk mematikan pengaturan ini.
                </span>
              </CardDescription>
            </div>
            <Switch
              name="staff_can_delete"
              defaultChecked={setting.staff_can_delete ?? false}
            />
          </section>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <SubmitButton>Simpan</SubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
}
