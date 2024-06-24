'use server'
import React from "react";
import { getOrderTracks } from "./action";
import { CiMapPin } from "react-icons/ci";
import { GiPin } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";

export default async function Tracks({ q }: { q: string }) {
  const tracks = await getOrderTracks(q);
  if (!!tracks)
    return (
      <section>
        <h1 className="font-bold my-3">Travel : Travel Kita</h1>
        <ol className="relative ms-3 border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
              <FaCheck />
            </span>
            <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">
              02 Feb 2024
            </h4>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Mengurus Passport
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
              <FaCheck />
            </span>
            <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">
              03 Feb 2024
            </h4>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Mengurus VISA dengan regulasi yang ada
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-dark text-white ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
              <GiPin />
            </span>
            <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">
              04 Feb 2024
            </h4>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Sedang Memverifikasi Data Kamu
            </p>
          </li>
        </ol>
      </section>
    );
}
