"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchPacket } from "@/lib/Zustands/LandingPage/SearchPacket";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import nProgress from "nprogress";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function SearchEngine({ q }: { q: string }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(q);
  const resetPage = useSearchPacket((state) => state.resetPage);

  const createQuery = () => {
    if (!query) return;
    nProgress.start();
    const params = new URLSearchParams(searchParams);

    params.delete("q");

    params.set("q", query);

    resetPage();
    replace(pathname + "?" + params);
    nProgress.done();
  };
  return (
    <form action={createQuery} className="flex gap-3 w-full">
      <Input
        className="w-full"
        placeholder="Masukkan nama paket..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" className="flex gap-3 items-center">
        <IoIosSearch />
        <span className="max-md:hidden">Cari Paket</span>
      </Button>
    </form>
  );
}
