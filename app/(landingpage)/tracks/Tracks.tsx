'use server';
import React from 'react';
import { getOrderTracks } from './action';
import { CiMapPin } from 'react-icons/ci';
import { GiPin } from 'react-icons/gi';
import { FaCheck } from 'react-icons/fa6';

export default async function Tracks({ q }: { q: string }) {
  const tracks = await getOrderTracks(q);
  const data = [
    {
      date: '6 September 2022',
      description: 'Berangkat menuju Surabaya menggunakan kendaraan darat selama 2-3 jam perjalanan',
    },
    {
      date: '7 September 2022',
      description: 'Melakukan Ibadah Mandiri',
    },
    {
      date: '8 September 2022',
      description: 'Melakukan City Tour Makkah',
    },
    {
      date: '9 September 2022',
      description: 'Melakukan Ibadah Mandiri',
    },
    {
      date: '10 September 2022',
      description: 'Melakukan Ibadah Mandiri',
    },
    {
      date: '11 September 2022',
      description: 'Berangkat menuju Madinah',
    },
    {
      date: '12 September 2022',
      description: 'Melakukan Ibadah Mandiri',
    },
    {
      date: '13 September 2022',
      description: 'City Tour Madinah',
    },
    {
      date: '14 September 2022',
      description: 'Melakukan Ibadah Mandiri',
    },
    {
      date: '15 September 2022',
      description: 'Ziarah / Napak Tilas sekitar Masjid Nabawi',
    },
    {
      date: '16 September 2022',
      description: 'Melakukan Ibadah Mandiri',
    },
    {
      date: '17 September 2022',
      description: 'Persiapan Kepulangan',
    },
    {
      date: '18 September 2022',
      description: 'Sampai di Bandara Internasional Juanda (SUB) Surabaya, Indonesia',
    },
  ];
  if (!!tracks)
    return (
      <section>
        <h1 className="font-bold my-3">Travel : Travel Kita</h1>
        <ol className="relative ms-3 border-s border-gray-200 dark:border-gray-700">
          {/* <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
              <FaCheck />
            </span>
            <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">02 Feb 2024</h4>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Mengurus Passport</p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
              <FaCheck />
            </span>
            <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">03 Feb 2024</h4>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Mengurus VISA dengan regulasi yang ada</p>
          </li> */}
          {data.map((track: any, index: number) => (
            <li className="mb-10 ms-6" key={index}>
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-dark text-white ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800">
                {index + 1 === data.length ? <GiPin /> : <FaCheck />}
              </span>
              <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">{track.date}</h4>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{track.description}</p>
            </li>
          ))}
        </ol>
      </section>
    );
}
