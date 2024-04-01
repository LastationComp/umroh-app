import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
interface LoadingProps {
  text?: string;
}
export default function LoadingUI({ text }: LoadingProps) {
  return (
    <div className="flex justify-center items-center gap-3">
      <AiOutlineLoading3Quarters className="animate-spin" />
      {text ?? 'Mohon Tunggu...'}
    </div>
  );
}
