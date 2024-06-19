'use client';
import { fetcher } from '@/lib/Fetcher';
import React, { useEffect, useMemo } from 'react';
import useSWR from 'swr';
import DraftCard from './DraftCard';
import LoadingUI from '@/components/Suspense/Loading';
import { CardTitle } from '@/components/ui/card';
import PublishPacket from './PublishPacket';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { usePagination } from '@/lib/Zustands/Pagination';

export default function Packets({ travel }: { travel: any }) {
  const { incPage, decPage, resetPage } = usePagination((state) => state);
  const draftPage = usePagination((state) => state.draft);
  const publishPage = usePagination((state) => state.publish);
  const { data: drafts } = useSWR(['/api/dashboard/travel/packets?is_publish=0', draftPage], ([url, paginate]) => fetcher(url + '&paginate=12&page=' + paginate));
  const { data: publish } = useSWR(['/api/dashboard/travel/packets?is_publish=1', publishPage], ([url, paginate]) => fetcher(url + '&paginate=12&page=' + paginate));

  useEffect(() => {
    resetPage('draft');
    resetPage('publish');
  }, []);
  return (
    <section className="flex flex-col gap-3">
      <CardTitle>Draft {draftPage}</CardTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {drafts?.data?.length === 0 && <span className="lg:col-span-4 text-center">Tidak ada Paket yang di publish.</span>}
        {drafts &&
          drafts?.data.map((packet: any, index: number) => (
            <section key={index}>
              <DraftCard data={packet} index={index + 1} />
            </section>
          ))}
        {!drafts && (
          <div className="col-span-full">
            <LoadingUI />
          </div>
        )}

        <section className="col-span-full flex justify-between gap-3 w-full">
          <span className="text-black/70">Halaman {draftPage}</span>
          <div className="flex gap-3">
            <Button onClick={() => decPage('draft')} disabled={!drafts?.prev_page_url}>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button onClick={() => incPage('draft')} disabled={!drafts?.next_page_url}>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>

      <CardTitle>Publish</CardTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {!publish && (
          <div className="col-span-full">
            <LoadingUI />
          </div>
        )}
        {publish?.data?.length === 0 && <span className="lg:col-span-4 text-center">Tidak ada Paket yang di publish.</span>}
        {publish?.data &&
          publish.data.map((packet: any, index: number) => (
            <section key={index}>
              <PublishPacket data={packet} index={index + 1} travel={travel} />
            </section>
          ))}

        <section className="col-span-full flex justify-between gap-3 w-full">
          <span className="text-black/70">Halaman {publishPage}</span>
          <div className="flex gap-3">
            <Button onClick={() => decPage('publish')} disabled={!publish?.prev_page_url}>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button onClick={() => incPage('publish')} disabled={!publish?.next_page_url}>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}
