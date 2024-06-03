// 'use client';
// import React, { useContext } from 'react';
// import { Card } from '../ui/card';
// import Image from 'next/image';
// import Link from 'next/link';
// import nProgress from 'nprogress';
// import { useRouter } from 'next/navigation';
// import { Progress } from '../ui/progress';
// import { Separator } from '../ui/separator';
// import { FaBed, FaHotel, FaPlaneDeparture, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
// import { formatDate } from '@/lib/Parser/DateFormat';
// import { IoLocation, IoTimeSharp } from 'react-icons/io5';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
// import CompareButton from './CompareButton';
// import OrderButton from '../order/OrderButton';
// import Favorites from '../order/Favorites';
// import ShareButton from './ShareButton';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
// import { Button } from '../ui/button';
// import { CiMenuKebab } from 'react-icons/ci';
// import SAlertContext from '../context/ShadAlert';
// import { useSWRConfig } from 'swr';

// interface PacketProps {
//   data: any;
//   index?: number;
// }

// export default function PublishCard({ data, index }: PacketProps) {
//   const router = useRouter();
//   const SAlert = useContext(SAlertContext);
//   const { mutate } = useSWRConfig();
//   const handleUrlImage = (url: string) => {
//     nProgress.start();
//     router.push('/paket/' + url);
//   };

   
//    const deletePacket = (id: string) => {
//      SAlert.trigger({
//        confirmButtonText: 'Ya',
//        cancelButtonText: 'Tidak',
//        title: 'Apakah kamu yakin ingin menghapus paket ini?',
//        text: 'Kamu akan kehilangan paket ini selamanya.',
//        icon: 'warning',
//        async onSuccess() {
//          const result = await cancelDraft(id);

//          if (!result) return;
//          mutate('/api/dashboard/travel/packets');
//          return toast({
//            title: 'Paket Berhasil Dihapus',
//            className: 'bg-green-600 text-white',
//          });
//        },
//      });
//    };

//   if (!data) return;
//   return (
//     <Card className="p-3 hover:outline hover:outline-1  shadow-md  hover:outline-blue-600">
//       <div className="flex justify-between gap-3 items-center">
//         <Image
//           className="rounded object-cover w-[100px] h-[70px] cursor-pointer"
//           onClick={() => handleUrlImage(String(data.title).replaceAll(' ', '-'))}
//           loading={'lazy'}
//           src={data?.galleries[0]?.image_url}
//           alt="Pic 1"
//           height={100}
//           width={100}
//         />

//         <div className="flex justify-between">
//           <div className="grid gap-1.5">
//             <Link href={`/paket`} key={index} className="text-sm font-semibold line-clamp-2 hover:text-blue-600">
//               {data.title}
//             </Link>
//             <div className="flex justify-between">
//               <span className="text-sm text-orange-400 font-bold">Rp.{data?.variants[0]?.details[0]?.price}</span>
//               <span className="text-sm text-black/60">{data?.variants[0]?.details[2]?.title}</span>
//             </div>
//           </div>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant={'ghost'} className="text-lg">
//                 <CiMenuKebab />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align={'end'}>
//               <DropdownMenuLabel>Aksi</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem asChild>
//                 <Link href={'packet/' + data?.id + '/draft'}>Ubah Draft</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem className="text-red-600" onClick={() => deletePacket(data?.id)}>
//                 Hapus
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//       <div className="my-2">
//         <div className="flex justify-between">
//           <span className="text-sm">Sisa Seat</span>
//           <span className="text-sm font-bold">{data.quota} Seat</span>
//         </div>
//         <Progress className="" value={data.quota} max={1000} />
//       </div>
//       <Separator />
//       <div className="flex justify-between my-2">
//         <span className="text-sm flex gap-2 items-center">
//           <FaRegCalendarAlt />
//           {formatDate(data.departure_time)}
//         </span>
//         <span className="text-sm flex gap-2 items-center">
//           {4} <FaRegStar className="text-yellow-500" /> <FaHotel />
//         </span>
//       </div>
//       <div className="flex justify-between my-2">
//         <span className="text-sm flex gap-2 items-center">
//           <FaPlaneDeparture /> {data.airlines[0].airline_name}
//         </span>
//         <span className="text-sm flex gap-2 items-center">
//           {data.travel_duration} Hari <IoTimeSharp />
//         </span>
//       </div>
//       <div className="flex justify-between my-2">
//         <span className="text-sm flex gap-2 items-center">
//           <IoLocation /> {data.departings[0].city_name}
//         </span>
//         <span className="text-sm flex gap-2 items-center">{/* {data.feature_detail} <FaBed /> */}</span>
//       </div>
//       {/* <div className="flex justify-between items-center my-3">
//         <div>
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Link href={`/blog/pembayaran-syariah`} target="_blank">
//                   <Image src={'https://assets.umroh.com/borobudur/img/amitra-syariah.1c01c48.svg'} className={index === 3 || index === 1 ? ' grayscale' : ''} alt="Is Syariah" width={60} height={20} />
//                 </Link>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Pembayaran Syariah</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         </div>
//         <div className="flex items-center gap-1">
//           <OrderButton />
//           <CompareButton />
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <div>
//                   <Favorites />
//                 </div>
//               </TooltipTrigger>
//               <TooltipContent className="bg-blue-dark">
//                 <p>Tambahkan ke Favorit</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//           <ShareButton image_url={data?.galleries[0]?.image_url} title={data.title} url={'http://localhost:3000/paket/' + String(data.title).replaceAll(' ', '-')} />
//         </div>
//       </div> */}
//     </Card>
//   );
// }
