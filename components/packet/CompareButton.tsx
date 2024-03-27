import React, { useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import nProgress from 'nprogress';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';
import { FaCheck } from 'react-icons/fa';
import { delay } from '@/lib/Promise/Delay';
import { Compare } from './action';

export default function CompareButton() {
  const [isCompared, setIsCompared] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleButton = async () => {
    const compare = await Compare();

    if (!compare) return;
    setIsCompared(!isCompared);
    if (isCompared) return;

    toast({
      title: 'Berhasil Ditambahkan!',
      description: 'Paket ditambahkan ke Bandingkan Paket',
    });

    await delay(500);
    nProgress.start();
    return router.push('/perbandingan');
  };

  return (
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
  );
}
