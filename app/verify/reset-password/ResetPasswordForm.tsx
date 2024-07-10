"use client";
import SubmitButton from "@/components/builder/SubmitButton";
import Alert from "@/components/callback/Alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Session } from "next-auth";
import React, { useState } from "react";
import { sendResetPassword } from "./action";
import { delay } from "@/lib/Promise/Delay";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";

const initialState: any = {
  type: "error",
  message: "",
};
export default function ResetPasswordForm() {
  const [state, setState] = useState(initialState);
  const [recaptcha, setRecaptcha] = useState<string | null>();
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const handleSubmit = async (formData: FormData) => {
    const result: any = await sendResetPassword(formData);
    await delay(1000);
    setState(result);
    if (!result.success) {
      setRecaptcha(null);
      recaptchaRef.current?.reset();
    }
  };
  if (state?.type !== "success")
    return (
      <form action={handleSubmit} className="flex flex-col gap-3">
        <span className="text-black/70">
          Masukkan email anda agar kami bisa mengirim verifikasi reset password
          pada email anda.
        </span>

        <div className="flex flex-col gap-1.5">
          {state.message && (
            <Alert variant={state.type} message={state.message} />
          )}
          <Label htmlFor="email" className="flex">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            required
            id="email"
            placeholder="Masukkan email anda..."
          />
        </div>
        <div className="w-full">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            ref={recaptchaRef}
            className="w-full"
            onChange={setRecaptcha}
          />
        </div>
        {recaptcha && <SubmitButton>Kirim</SubmitButton>}
        {!recaptcha && <Button disabled>Kirim</Button>}
      </form>
    );

  return <section className="flex justify-center">{state.message}</section>;
}
