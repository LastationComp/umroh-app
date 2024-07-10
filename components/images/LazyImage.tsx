"use client";

import { cn } from "@/lib/utils";
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
    <section className="relative">
      {!isVisible && (
        <div
          ref={isInView}
          className={cn(
            "absolute w-full h-full bg-gray-400 rounded-md blur-sm transition"
          )}
        ></div>
      )}

      <Image
        // ref={isInView}
        loading="lazy"
        // placeholder="blur"
        src={isVisible ? src : ""}
        {...props}
      />
    </section>
  );
};

export default LazyImage;
