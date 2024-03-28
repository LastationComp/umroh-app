import React from 'react';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

interface TagProps {
  variant?: 'blue' | 'red' | 'purple' | 'green';
  children?: React.ReactNode;
}
export default function Tag({ variant = 'blue', children }: TagProps) {
  const generateColor = () => {
    if (variant === 'blue') return 'bg-blue-200/50 text-blue-500';
    if (variant === 'green') return 'bg-green-200/50 text-green-500';
    if (variant === 'red') return 'bg-red-200/50 text-red-500';
    if (variant === 'purple') return 'bg-purple-200/50 text-purple-500';
  };
  return (
    <Badge variant={'outline'} className={cn(generateColor(), 'uppercase')}>
      {children}
    </Badge>
  );
}
