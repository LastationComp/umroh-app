'use client';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LineIcon, LineShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'next-share';
import React from 'react';

export default function Shares({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <EmailShareButton url={url} subject={title} body="body" blankTarget>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <FacebookShareButton url={url} quote={title} hashtag={'#umrohai'} blankTarget>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TelegramShareButton url={url} title={title} blankTarget>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <TwitterShareButton url={url} title={title} blankTarget>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LineShareButton url={url} title={title} blankTarget>
        <LineIcon size={32} round />
      </LineShareButton>
      <WhatsappShareButton url={url} title={title} separator=":: " blankTarget>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}
