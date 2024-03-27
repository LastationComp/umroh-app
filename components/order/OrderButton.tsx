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
import { Order } from './action';

export default function OrderButton() {
  return (
    <section>
      <form action={Order}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
                <FiShoppingCart />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pesan</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </form>
    </section>
  );
}
