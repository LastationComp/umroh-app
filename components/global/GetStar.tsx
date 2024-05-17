"use client";
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";

export default function GetStar({ value }: { value: number }) {
  return (
    <section className="flex gap-2 items-center">
      {Array.from({ length: value }).map((_, index: number) => (
        <IoIosStar key={index} className="text-yellow-400" />
      ))}
    </section>
  );
}
