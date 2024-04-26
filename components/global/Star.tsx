'use client';
import React, { useEffect, useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

export default function InputStar({ star }: { star?: number }) {
  const [stars, setStars] = useState([]);
  const [unstar, setUnStar] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState(0);
  const updateStar = (index: number) => {
    if (stars.length === index) return setStars([]);
    const star: any = [];
    for (let i = 1; i <= index; i++) {
      star.push(1);
    }
    setStars(star);
  };

  const updateIfStarExists = () => {
    if (star) updateStar(star);
  };
  useEffect(() => {
    setValue(stars.length);
  }, [stars]);

  useEffect(() => {
    updateIfStarExists();
  }, []);

  return (
    <section className="flex gap-3 relative">
      <div className="absolute bg-transparent">
        <div className="flex gap-3">
          {stars.map((star, index: number) => (
            <IoIosStar key={index} className="cursor-pointer text-yellow-400" onClick={() => updateStar(index + 1)} />
          ))}
        </div>
      </div>
      {unstar.map((star, index: number) => (
        <IoIosStarOutline key={index} className="cursor-pointer" onClick={() => updateStar(index + 1)} />
      ))}
      {value !== 0 && <input type="hidden" name="class" value={value} />}
    </section>
  );
}
