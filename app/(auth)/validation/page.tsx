"use client";

import React, { useEffect, useRef } from "react";
import { getUserComparison, redirectTo } from "./action";
import { useComparison } from "@/lib/Zustands/User/Comparison";
import { useRouter } from "next/navigation";
import LoadingUI from "@/components/Suspense/Loading";

export default function Page() {
  const firstRendered = useRef(false);
  const router = useRouter();
  const { setCompares, setCount } = useComparison((state) => state);

  const fetchUserProfile = async () => {
    const compare = await getUserComparison();
    setCount(compare.count);
    router.refresh();
    router.push("/");
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);
  return <LoadingUI text="Sedang memuat akun kamu..." />;
}
