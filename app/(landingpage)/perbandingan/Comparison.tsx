import React from "react";
import ComparisonCarts from "./ComparisonCarts";
import { userComparison } from "./action";

async function getPaketUmroh() {
  const res = await fetch(process.env.URL_API + "/paket_umroh", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Comparison() {
  const comparisonData = await userComparison();
  return <ComparisonCarts paket_umroh={comparisonData.data} />;
}
