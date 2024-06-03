import React from 'react';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import { FaCheckCircle } from 'react-icons/fa';
import { IoCloseCircle, IoWarningOutline } from 'react-icons/io5';
import { Alert as Alerts, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { IoMdCheckmark } from 'react-icons/io';

interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | undefined;
  message?: string;
  description?: string;
}
export default function Alert({ variant = 'success', message, description }: AlertProps) {
  const getMessageStyle = () => {
    if (variant === 'error') return 'destructive';

    return 'default';
  };

  const getClassStyle = () => {
    if (variant === 'success') return 'outline outline-1 outline-green-500 text-green-500';
    if (variant === 'warning') return 'outline outline-1 outline-yellow-500 text-yellow-500';
  };
  // return (
  //   <Card className={cn('rounded-md px-3 py-2', getMessageStyle())}>
  //     <div className="flex gap-3 items-center">
  //       {variant === 'success' && <FaCheckCircle className="text-white text-md" />}
  //       {variant === 'error' && <IoCloseCircle className="text-white text-lg" />}
  //       <div className="grid">
  //         <span>{message}</span>
  //         {description && <span className="text-sm text-white/70">{description}</span>}
  //       </div>
  //     </div>
  //   </Card>
  // );
  const getIconAlert = () => {
    if (variant === 'success') return <IoMdCheckmark className={'text-green-500'} />;
    return <IoWarningOutline />;
  };
  return (
    <Alerts variant={getMessageStyle()} className={getClassStyle()}>
      {getIconAlert()}
      <AlertTitle className="capitalize">{variant}</AlertTitle>
      {message && <AlertDescription>{message}</AlertDescription>}
    </Alerts>
  );
}
