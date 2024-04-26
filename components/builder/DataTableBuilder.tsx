'use client';
import React, { useEffect, useState } from 'react';
import { DataTable } from '../ui/data-table';
import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from '@/lib/Fetcher';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';

interface DataTableBuilerProps {
  columns: any;
  endpoint: any;
}

export default function DataTableBuilder({ columns, endpoint }: DataTableBuilerProps) {
  const [page, setPage] = useState(1);
  const [paginate, setPaginate] = useState(10);
  const { data, mutate } = useSWR([endpoint, page, paginate], ([url, page, paginate]) => fetcher(url + `?page=${page}&paginate=${paginate}`));

  useEffect(() => {
    mutate(data);
  }, [page]);

  return (
    <section>
      <DataTable columns={columns} data={data?.data ?? []} suspense={!data?.links} />
      {data && (
        <div className="flex items-center justify-between px-2 my-3">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${paginate}`}
              onValueChange={(value) => {
                setPaginate(Number(value));
                setPage(1);
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={paginate} />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
              Page {data?.current_page} of {data?.last_page}
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => setPage(1)} disabled={!data?.first_page_url || data?.current_page === 1}>
                <span className="sr-only">Go to first page</span>
                <DoubleArrowLeftIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-8 w-8 p-0" onClick={() => setPage((prev) => prev - 1)} disabled={!data?.prev_page_url}>
                <span className="sr-only">Go to previous page</span>
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-8 w-8 p-0" onClick={() => setPage((prev) => prev + 1)} disabled={!data?.next_page_url}>
                <span className="sr-only">Go to next page</span>
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => setPage(data?.last_page)} disabled={!data?.last_page_url || data?.current_page === data?.last_page}>
                <span className="sr-only">Go to last page</span>
                <DoubleArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
