"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface LazyImageProps extends ImageProps {}

const LazyImage: React.FC<LazyImageProps> = ({ src, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, entry] = useInView({
    trackVisibility: true,
    threshold: 0,
    delay: 300,
  });

  useEffect(() => {
    if (entry) setIsVisible(true);
  }, [entry]);

  return (
    <Image
      ref={isInView}
      loading="lazy"
      placeholder="blur"
      blurDataURL={
        "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4nGNgoDqor2dg+r8qlHnVqlBmBgYGRhC9v96e5f9/BkYI/s/4n4GBEUUTSALOZoCwQfT/egYmhsZcFfstUwzqV/bphIEkVvfoRm6ZrDttSoWySnexqvmMenWTjjIVGYb1E/Vm7Zyhv3vHTIMTa/p01+6Yob9t6zS92i1T9HZtnqw3/8A8wymbJ+sWMKzr15t9YJ7h3e3T9A/vmmWw8+hi4wqQyYcWGu3aMkV/x945Btd2TDc4z7C0XXvmqm6dCev6dddMrlGP2jlTb9+2qfqX103Q7V7codW8YbJu/vJWTVuGykQJ0axQLZ7J9epSFZlyggvbNIRX9+mYhIYyMNfHywu0Z8oJ1qdJcqH6EBokYHZ9PRMouGBBAgDPSnJGn7aczAAAAABJRU5ErkJggg=="
      }
      src={!isVisible ? `/api/image/blur?url=${src}` : src}
      {...props}
    />
  );
};

export default LazyImage;
