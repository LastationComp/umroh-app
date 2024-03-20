import React from 'react';

interface TimeLine {
  className?: React.HTMLAttributes<HTMLDivElement>;
  items?: {
    title: string;
    content: string;
  }[];

  icon?: React.ReactElement;
}

export default function TimeLine({ className, items, icon }: TimeLine) {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {items?.map((item, index) => (
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center p-1 w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <div className="text-sm ">{icon}</div>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}
            {/* {index + 1 === items.length && <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span>} */}
          </h3>
          {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time> */}
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.content}</p>
        </li>
      ))}
    </ol>
  );
}
