"use server";

import { newApiFetch } from "@/lib/Fetcher";
import { getLaravelToken } from "@/lib/Handling/userSession";
import { delay } from "@/lib/Promise/Delay";
import { createQueryParams } from "@/lib/String/QueryParams";
import { revalidateTag } from "next/cache";

export async function getPaketUmroh(
  page: number,
  perpage: number = 3,
  query: string = ""
) {
  await delay(1000);
  const res = await fetch(
    `${process.env.URL_API}/paket_umroh?_start=${
      page * perpage - perpage
    }&_limit=${perpage * page}`,
    { cache: "no-store" }
  );
  return res.json();
}

export async function getPackets(query: any = {}) {
  const token = await getLaravelToken();
  const queryParams = createQueryParams({
    page: query.page,
    paginate: 6,
    q: query.q,
  });
  const res = await newApiFetch({
    url: "/api/public/travel-packets" + queryParams,
    token: token,
    options: {
      tag: ["public-travel-packets"],
    },
  });

  const result = await res.json();
  return result.data;
}

export async function getUserComparison() {
  const token = await getLaravelToken();

  const res = await newApiFetch({
    url: "/api/profile/comparison",
    token: token,
  });

  if (res.status === 200) {
    const result = await res.json();
    return result;
  } else {
    return false;
  }
}
