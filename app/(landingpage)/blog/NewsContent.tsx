import NewsCard from '@/components/blogs/NewsCard';
import React from 'react';

export default function NewsContent() {
  const news = [1, 2, 3, 4];
  return (
    <div className="grid max-md:grid-rows-4 lg:grid-rows-12 lg:grid-flow-col gap-5">
      {news.map((data, index) => {
        if (index === 0)
          return (
            <div className="lg:row-span-12 lg:col-span-6" key={index}>
              <NewsCard isThumbnail type={'image'} key={index} />
            </div>
          );

        return (
          <div className="lg:col-span-12 lg:row-span-4" key={index}>
            <NewsCard key={index} />
          </div>
        );
      })}
      {/* {news.map((data, index) => {
        if (index === 0)
          return (
            <div className="">
              <NewsCard isThumbnail />
            </div>
          );

        return (
          <div className="">
            <NewsCard />
          </div>
        );
      })} */}
    </div>
  );
}
