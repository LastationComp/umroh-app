'use client';
import React, { useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FiShoppingCart } from 'react-icons/fi';
import { Dialog, DialogClose, DialogContent } from '../ui/dialog';
import MustLoginPage from '../callback/must-login';
import { useRouter } from 'next/navigation';
import nProgress from 'nprogress';

export default function OrderButton() {
  const [showDialog, setShowDialog] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const router = useRouter();

  const handleButton = (url: string) => {
    if (!authenticated) {
      nProgress.start();
      return router.push('/masuk');
    }

    return router.push('/order/' + url);
  };
  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem('auth') === 'true';
    setAuthenticated(value);
  }, []);
  return (
    <section>
      <MustLoginPage open={showDialog} onOpenChange={setShowDialog} />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={() => handleButton('paket-unique')}>
              <FiShoppingCart />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Pesan</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>
  );
}
