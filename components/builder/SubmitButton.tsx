'use client';
import React from 'react';
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { cn } from '@/lib/utils';
export default function SubmitButton({ children, variant = 'default' }: { children?: React.ReactNode; variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined }) {
  const { pending } = useFormStatus();
  return (
    <Button type={'submit'} variant={variant} className={cn('flex items-center justify-center gap-3')} disabled={pending}>
      {pending && <AiOutlineLoading3Quarters className={pending ? 'animate-spin' : ''} />}
      {children ?? 'tambah'}
    </Button>
  );
}
