import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { MdOutlineShare } from 'react-icons/md';
import { Dialog, DialogClose, DialogContent, DialogHeader } from '../ui/dialog';
import { Card } from '../ui/card';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { EmailShareButton, EmailIcon, FacebookShareButton, FacebookIcon, TelegramShareButton, TelegramIcon, TwitterShareButton, TwitterIcon, LineShareButton, LineIcon, WhatsappShareButton, WhatsappIcon } from 'next-share';
import CloseButton from '../callback/CloseButton';

interface ShareProps {
  image_url: string;
  url: string;
  title?: string;
}
export default function ShareButton({ image_url, url, title }: ShareProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const titlePromo = `Beli Paket ${title} hanya di umroh.ai`;
  return (
    <section>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={'ghost'} onClick={() => setOpenDialog(!openDialog)}>
              <MdOutlineShare className="text-lg" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-blue-dark">
            <p>Bagikan</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="flex flex-col gap-3 md:max-w-xl max-w-sm">
          <DialogHeader>Beli Paket di umroh.ai bersama-sama lebih seru!</DialogHeader>
          <DialogClose asChild>
            <CloseButton onClick={() => setOpenDialog(!openDialog)} />
          </DialogClose>
          <Card className="bg-slate-200 flex items-center gap-3 py-2 px-3">
            <Image src={image_url} width={500} height={500} loading={'lazy'} className="w-[100px]" alt={title ?? 'Share Image'} />
            <span className="line-clamp-2">{title ?? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.'} </span>
          </Card>
          <Separator />
          <span>Mau dibagikan lewat mana?</span>
          <div className="flex items-center gap-3">
            <EmailShareButton url={url} subject={titlePromo} body="body" blankTarget>
              <EmailIcon size={32} round />
            </EmailShareButton>
            <FacebookShareButton url={url} quote={titlePromo} hashtag={'#umrohai'} blankTarget>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TelegramShareButton url={url} title={titlePromo} blankTarget>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton url={url} title={titlePromo} blankTarget>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LineShareButton url={url} title={titlePromo} blankTarget>
              <LineIcon size={32} round />
            </LineShareButton>
            <WhatsappShareButton url={url} title={titlePromo} separator=":: " blankTarget>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
