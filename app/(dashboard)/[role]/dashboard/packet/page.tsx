import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <section className="flex items-center justify-between">
      <span>Paket Travel</span>
      <Button asChild>
        <Link href={"packet/add"}>Tambah Paket</Link>
      </Button>
    </section>
  );
}
