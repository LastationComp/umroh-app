import React from 'react';
import { Skeleton } from '../ui/skeleton';

interface LoadingSkeletonProps {
  card?: number;
}
export default function LoadingSingleSkeleton({ card = 10 }: LoadingSkeletonProps) {
  return (
    <>
      {Array.from(Array(card).keys()).map((_, index) => (
        <Skeleton key={index} className="w-full h-[240px] rounded-xl" />
      ))}
    </>
  );
}
