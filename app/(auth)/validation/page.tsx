"use client";

import React, { useEffect, useRef } from "react";
import { getUserComparison } from "./action";
import { useComparison } from "@/lib/Zustands/User/Comparison";
import { useRouter } from "next/navigation";

export default function page() {
  const firstRendered = useRef(false);
  const router = useRouter();
  const { setCompares, setCount } = useComparison((state) => state);

  const fetchUserProfile = async () => {
    const compare = await getUserComparison();
    setCount(compare.count);

    router.push("/");
    router.refresh();
  };
  
  useEffect(() => {
    if (firstRendered.current) {
      fetchUserProfile();
    }

    firstRendered.current = true;
  }, []);
  return <div>Sedang Memuat Akun Kamu...</div>;
}
