import { SAlert } from "@/components/context/ShadAlert";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard " + process.env.NEXT_PUBLIC_APP_NAME,
    default: "Monitoring Paket",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SAlert>{children}</SAlert>;
}
