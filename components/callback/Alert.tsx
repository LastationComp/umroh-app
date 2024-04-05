import React from 'react';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import { FaCheckCircle } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';

interface AlertProps {
  variant?: 'success' | 'error' | 'warning';
  message?: string;
  description?: string;
}
export default function Alert({ variant = 'success', message, description }: AlertProps) {
  const getMessageStyle = () => {
    if (variant === 'success') return 'bg-green-500 text-white';
    if (variant === 'error') return 'bg-red-500 text-white';

    return '';
  };
  return (
    <Card className={cn('rounded-md px-3 py-2', getMessageStyle())}>
      <div className="flex gap-3 items-center">
        {variant === 'success' && <FaCheckCircle className="text-white text-md" />}
        {variant === 'error' && <IoCloseCircle className="text-white text-lg" />}
        <div className="grid">
          <span>{message}</span>
          {description && <span className="text-sm text-white/70">{description}</span>}
        </div>
      </div>
    </Card>
  );
}
