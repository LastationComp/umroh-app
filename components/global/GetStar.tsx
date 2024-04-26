'use client';
import React, { useEffect, useState } from 'react';
import { IoIosStar } from 'react-icons/io';

export default function GetStar({ value }: { value: number }) {
  const [stars, setStars] = useState([]);

  const updateStar = (index: number) => {
    if (stars.length === index) return setStars([]);
    const star: any = [];
    for (let i = 1; i <= index; i++) {
      star.push(1);
    }
    setStars(star);
  };

  useEffect(() => {
    updateStar(value);
  }, []);
  return (
    <section className="flex gap-2 items-center">
      {stars.map((star, index: number) => (
        <IoIosStar key={index} className="cursor-pointer text-yellow-400" />
      ))}
    </section>
  );
}
