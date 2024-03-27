import React from 'react';
import { Skeleton } from '../ui/skeleton';

interface LoadingSkeletonProps {
  grid?: number;
  card?: number;
}
export default function LoadingSkeleton({ grid = 4, card = 10 }: LoadingSkeletonProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${grid} gap-3`}>
      {Array.from(Array(card).keys()).map((_, index) => (
        <Skeleton key={index} className="w-full h-[240px] rounded-xl" />
      ))}
    </div>
  );
}
