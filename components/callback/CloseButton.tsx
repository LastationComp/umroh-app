import React from 'react';
import { Button } from '../ui/button';

interface CloseButtonProps {
  onClick?: any;
}
export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <Button className="uppercase absolute top-0 right-0" variant={'ghost'} onClick={onClick}>
      x
    </Button>
  );
}
