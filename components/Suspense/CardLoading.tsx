import { cn } from "@/lib/utils";
import React from "react";

export default function CardLoading({ isLoading = true }: { isLoading: boolean }) {
  return (
    <div
      className={cn(
        "bg-white/70 z-40 absolute w-full h-full",
        isLoading ? "" : "hidden"
      )}
    ></div>
  );
}
