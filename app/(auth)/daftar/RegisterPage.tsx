"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { IoLogoGoogle } from "react-icons/io5";
import { registration } from "./action";
import Alert from "@/components/callback/Alert";
import SubmitButton from "@/components/builder/SubmitButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import nProgress from "nprogress";
import ReCAPTCHA from "react-google-recaptcha";

const initialState: any = {
  type: "error",
  message: "",
  success: false,
};
export default function RegisterPage() {
  const [state, setState] = useState(initialState);
  const router = useRouter();
  const [recaptcha, setRecaptcha] = useState<string | null>();
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const register = async (formData: FormData) => {
    if (recaptcha) {
      const result = await registration(formData);
      if (!result.success) {
        setRecaptcha(null);
        recaptchaRef.current?.reset();
        toast.error(result.message);
        return setState(result);
      }

      const login = await signIn("credentials", {
        email: formData.get("email") ?? "",
        password: formData.get("password") ?? "",
        redirect: false,
      });
      if (login?.ok) return router.push("daftar/step");
    }
  };

  const registerWithGooglo = async () => {
    nProgress.start();
    await signIn("google", { redirect: false });
  };
  return (
    <section className="flex flex-col gap-5 max-md:w-full">
      <span className="text-2xl font-bold text-center">Daftar Umroh.ai</span>
      <span className="text-sm text-center">
        Masukkan data anda untuk daftar ke umroh.ai
      </span>
      <form
        action={register}
        onSubmit={() => setState(initialState)}
        className="w-full flex flex-col gap-3"
      >
        <Input
          type="text"
          required
          name="name"
          className="w-full outline outline-1 outline-slate-400"
          placeholder="Masukkan Nama Lengkap Anda..."
        />
        <Input
          type="email"
          required
          name="email"
          className="w-full outline outline-1 outline-slate-400"
          placeholder="Masukkan Email Anda..."
        />
        <Input
          type="password"
          required
          name="password"
          className="w-full outline outline-1 outline-slate-400"
          placeholder="Masukkan Password Anda..."
        />
        <Input
          type="password"
          required
          name="confirm_password"
          className="w-full outline outline-1 outline-slate-400"
          placeholder="Masukkan Konfimasi Password Anda..."
        />
        <div className="w-full">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            ref={recaptchaRef}
            className="w-full"
            onChange={setRecaptcha}
          />
        </div>
        {!recaptcha && <Button disabled>Daftar</Button>}
        {recaptcha && <SubmitButton>Daftar</SubmitButton>}
      </form>
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            atau daftar dengan
          </span>
        </div>
      </div>
      <div className="w-full">
        <Button
          onClick={registerWithGooglo}
          className="text-sm w-full flex gap-3 items-center"
          variant={"outline"}
        >
          <IoLogoGoogle />
          Lanjutkan dengan Google
        </Button>
      </div>
    </section>
  );
}
