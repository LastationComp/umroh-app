import React, { useCallback, useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import nProgress from 'nprogress';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '../ui/use-toast';
import { FaCheck } from 'react-icons/fa';
import { delay } from '@/lib/Promise/Delay';
import { Compare } from './action';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';

interface CompareProps {
  id?: string;
}
export default function CompareButton({ id }: CompareProps) {
  const [isCompared, setIsCompared] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { toast } = useToast();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleButton = async () => {
    const compare = await Compare(pathname + '?' + createQueryString('paket', '123'));

    if (!compare) return;
    setIsCompared(!isCompared);
    if (isCompared) return;

    return setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  useEffect(() => {}, [pathname, searchParams]);
  return (
    <section>
      <Dialog open={openDialog} onOpenChange={setOpenDialog} key={id}>
        <DialogContent className="max-w-lg scale-90 flex flex-col justify-center items-center">
          <DialogHeader className="flex flex-col items-center">
            <DialogTitle>Berhasil Ditambahkan!</DialogTitle>
            <p className="line-clamp-1 font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, veritatis.</p>
            <DialogDescription>Paket berhasil ditambahkan</DialogDescription>
          </DialogHeader>
          <div className="flex gap-3">
            <Button onClick={handleCloseDialog}>Lanjut Mencari Paket</Button>
            <Button variant={'outline'} asChild>
              <Link href={'/perbandingan'}>Ke Perbandingan Paket</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'secondary'} onClick={handleButton}>
              {!isCompared && <FontAwesomeIcon icon={faRightLeft} />}
              {isCompared && <FaCheck />}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-blue-dark">
            <p>Bandingkan</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>
  );
}
