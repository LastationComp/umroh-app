import { cn } from '@/lib/utils';
import React from 'react';
import LoadingUI from './Loading';

export default function CardLoading({ isLoading = true }: { isLoading: boolean }) {
  return (
    <div className={cn('bg-white/70 z-40 absolute w-full h-full', isLoading ? '' : 'hidden')}>
      <div className="flex justify-center items-center w-full h-full">
        <LoadingUI />
      </div>
    </div>
  );
}
