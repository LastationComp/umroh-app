'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyLoadedContent = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, entry] = useInView({
    trackVisibility: true,
    threshold: 0,
    delay: 100,
  });

  useEffect(() => {
    if (entry) setIsVisible(true);
  }, [entry]);

  return <section ref={isInView}>{isVisible && children}</section>;
};

export default LazyLoadedContent;
