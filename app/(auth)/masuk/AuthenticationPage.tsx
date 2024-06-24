"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { SyntheticEvent, useState } from "react";
import { IoLogoGoogle } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import nProgress from "nprogress";
import SubmitButton from "@/components/builder/SubmitButton";
import { signIn } from "next-auth/react";
import Alert from "@/components/callback/Alert";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
export default function AuthenticationPage() {
  const [errMsg, setErrMsg] = useState("");
  const [recaptcha, setRecaptcha] = useState<string | null>();
  const router = useRouter();
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const handleSubmit = async (formData: FormData) => {
    if (recaptcha) {
      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });

      if (!res?.ok || res.status !== 200) {
        setRecaptcha(null);
        recaptchaRef.current?.reset();
        return setErrMsg("Email or Password is wrong! please try again");
      }

      router.replace("/validation");
      // await getUserComparison();

      // await redirectTo(searchParams.get("redirect") ?? "/");
    }
  };

  const continueWithGooglo = async () => {
    nProgress.start();
    await signIn("google", { redirect: true, callbackUrl: "/validation" });
  };
  return (
    <section className="flex flex-col gap-5 items-center">
      <span className="text-2xl font-bold">
        Masuk {process.env.NEXT_PUBLIC_APP_NAME}
      </span>
      <span className="text-sm text-center">
        Masukkan username dan password untuk login ke {process.env.NEXT_PUBLIC_APP_NAME}
      </span>
      <div className="flex w-full">
        {errMsg !== "" && <Alert variant={"error"} message={errMsg} />}
      </div>
      <form
        action={handleSubmit}
        // onSubmit={() => setErrMsg("")}
        className="w-full flex flex-col gap-3"
      >
        {/* <Input type="text" name="name" className="w-full outline outline-1 outline-slate-400" placeholder="Masukkan Nama Anda..." /> */}
        <Input
          type="email"
          name="email"
          defaultValue={"admin@gmail.com"}
          className="w-full outline outline-1 outline-slate-400"
          placeholder="Masukkan Email Anda..."
        />
        <Input
          type="password"
          name="password"
          defaultValue={"12345678"}
          className="w-full outline outline-1 outline-slate-400"
          placeholder="Masukkan Password Anda..."
        />
        <div className="w-full">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            ref={recaptchaRef}
            className="w-full"
            onChange={setRecaptcha}
          />
        </div>
        {!recaptcha && <Button disabled>Masuk</Button>}
        {recaptcha && <SubmitButton>Masuk</SubmitButton>}
      </form>
      <span className="text-sm text-muted-foreground">
        Lupa password kamu?{" "}
        <Link href="/verify/reset-password" className="text-blue-600">
          Klik disini
        </Link>
      </span>
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            atau masuk dengan
          </span>
        </div>
      </div>
      <div className="w-full">
        <Button
          onClick={continueWithGooglo}
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
