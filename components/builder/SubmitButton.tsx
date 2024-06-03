'use client';
import React, { LegacyRef, MouseEventHandler } from 'react';
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { cn } from '@/lib/utils';
export default function SubmitButton({
  children,
  variant = 'default',
  suspense = false,
  type = 'submit',
  name,
  onClick,
  className,
  ref,
}: {
  children?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined;
  suspense?: boolean;
  type?: 'submit' | 'button';
  name?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  ref?: LegacyRef<HTMLButtonElement>;
}) {
  const { pending } = useFormStatus();
  return (
    <Button type={type} ref={ref} role={type} name={name} onClick={onClick} variant={variant} className={cn('flex items-center justify-center gap-3', className)} disabled={pending || suspense}>
      {(pending || suspense) && <AiOutlineLoading3Quarters className={pending ? 'animate-spin' : ''} />}
      {children ?? 'Tambah'}
    </Button>
  );
}
