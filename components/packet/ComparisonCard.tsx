// import React from 'react';
// import { Card } from '../ui/card';
// import { Badge } from '../ui/badge';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Progress } from '../ui/progress';
// import { Separator } from '../ui/separator';
// import { FaBed, FaHotel, FaPlaneDeparture, FaRegCalendarAlt, FaRegStar } from 'react-icons/fa';
// import { formatDate } from '@/lib/Parser/DateFormat';
// import { IoLocation, IoTimeSharp } from 'react-icons/io5';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
// import { Button } from '../ui/button';
// import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';

// interface ComparisonProps {
//   data: any;
//   index?: number;
// }
// export default function ComparisonCard({ data, index = 0 }: ComparisonProps) {
//   return (
//     <Card
//       className={'p-3 hover:outline hover:outline-1 shadow-md hover:outline-blue-400 relative'}
//       //   onClick={() => setComparison(data)}
//     >
//       <div className="absolute -left-1 top-3">
//         {/* {isCheaporExpen(data.price) === 'cheap' && <Badge className="bg-green-400">Paling Murah</Badge>}
//         {isCheaporExpen(data.price) === 'expen' && <Badge variant={'destructive'}>Paling Mahal</Badge>} */}
//       </div>

//       <div className="flex justify-between gap-3 items-center">
//         <Image className="rounded object-cover w-[100px] h-[70px]" loading={'lazy'} src={data?.img} alt="Pic 1" height={100} width={100} />
//         <div className="flex flex-col">
//           <Link href={`/paket/${String(data.title).replaceAll(' ', '-')}`} key={index}>
//             <span className="text-sm font-semibold line-clamp-2 hover:text-blue-600">{data.title}</span>
//           </Link>
//           <div className="flex justify-between">
//             <span className="text-sm text-orange-400 font-bold">
//               Rp. {data.price.toString().length >= 6 ? data.price.toString().slice(0, 2) + ',' + data.price.toString().charAt(2) + 'jt' : data.price.toString().slice(0, 3) + 'rb'}
//             </span>
//             <span className="text-sm text-black/60">{data.feature}</span>
//           </div>
//         </div>
//       </div>
//       <div className="my-2">
//         <div className="flex justify-between">
//           <span className="text-sm">Sisa Seat</span>
//           <span className="text-sm font-bold">{data.sisa_seat} Seat</span>
//         </div>
//         <Progress className="" value={data.sisa_seat} />
//       </div>
//       <Separator />
//       <div className="flex justify-between my-2">
//         <span className="text-sm flex gap-2 items-center">
//           <FaRegCalendarAlt />
//           {formatDate(data.date_going)}
//         </span>
//         <span className="text-sm flex gap-2 items-center">
//           {data.star_hotel} <FaRegStar className="text-yellow-500" /> <FaHotel />
//         </span>
//       </div>
//       <div className="flex justify-between my-2">
//         <span className="text-sm flex gap-2 items-center">
//           <FaPlaneDeparture /> {data.plane}
//         </span>
//         <span className="text-sm flex gap-2 items-center">
//           {data.days} Hari <IoTimeSharp />
//         </span>
//       </div>
//       <div className="flex justify-between my-2">
//         <span className="text-sm flex gap-2 items-center">
//           <IoLocation /> {data.departing_from}
//         </span>
//         <span className="text-sm flex gap-2 items-center">
//           {data.feature_detail} <FaBed />
//         </span>
//       </div>
//       <div className="flex justify-between items-center my-3">
//         <div>
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger>
//                 <Image src={'https://assets.umroh.com/borobudur/img/amitra-syariah.1c01c48.svg'} className={!data.is_syariah ? ' grayscale' : ''} alt="Is Syariah" width={60} height={20} />
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Pembayaran Syariah</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         </div>
//         <div className="flex items-center gap-1 z-20">
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Button onClick={() => setComparison(data)}>
//                   <FiShoppingCart />
//                 </Button>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Pesan</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Button variant={'destructive'} onClick={() => deleteComparison(data.id)}>
//                   <FiTrash2 />
//                 </Button>
//               </TooltipTrigger>
//               <TooltipContent className="bg-red-400">
//                 <p>Hapus</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         </div>
//       </div>
//       <div className="relative w-full my-3">
//         <div className="absolute inset-0 flex items-center">
//           <Separator className="w-full" />
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="bg-background px-2 text-muted-foreground">Fasilitas</span>
//         </div>
//       </div>
//       <ul className="list-disc list-inside text-sm">
//         <li>Lorem ipsum dolor sit amet.</li>
//         {index > 3 && <li>Lorem ipsum dolor sit amet.</li>}
//       </ul>
//       <div className="relative w-full my-3">
//         <div className="absolute inset-0 flex items-center">
//           <Separator className="w-full" />
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="bg-background px-2 text-muted-foreground">Hotel</span>
//         </div>
//       </div>
//       <ul className="list-disc list-inside text-sm">
//         <li>Le Meridien Towers Makkah</li>
//         <li>Dar Al Eiman Al Andalus Hotel</li>
//       </ul>
//       <div className="relative w-full my-3">
//         <div className="absolute inset-0 flex items-center">
//           <Separator className="w-full" />
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="bg-background px-2 text-muted-foreground">Penerbangan</span>
//         </div>
//       </div>
//       <ul className="list-disc list-inside text-sm">
//         <li>Garuda Indonesia</li>
//       </ul>
//     </Card>
//   );
// }
