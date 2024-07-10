"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createQueryParams } from "@/lib/String/QueryParams";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = async (formData: FormData) => {
    const query = formData.get("q") as string;
    const q = searchParams.get("q") as string;
    if (!query) return;
    if (query === q) return;
    const finalQuery = createQueryParams({
      q: query,
    });

    router.replace(pathname + finalQuery);
  };

  return (
    <form action={handleSearch} className="flex justify-center gap-1.5">
      <Input
        type="search"
        name="q"
        placeholder="Masukkan kode pesanan..."
        className="max-w-md"
      />
      <Button className="flex gap-1.5 items-center">
        <IoSearch />
        Lacak
      </Button>
    </form>
  );
}
