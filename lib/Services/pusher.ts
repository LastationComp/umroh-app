// import { getCsrfToken } from 'next-auth/react';
// import Pusher from 'pusher-js';

// export const getPusherUser = async (csrf: string) => {
//   return new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY ?? '', {
//     cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER ?? 'ap1',
//     //   channelAuthorization: {
//     //     transport: 'jsonp',
//     //     endpoint: process.env.NEXT_PUBLIC_URL_API + '/api/broadcasting/auth',
//     //   },
//     channelAuthorization: {
//       transport: 'ajax',
//       endpoint: process.env.NEXT_PUBLIC_URL_API + '/api/broadcasting/auth',
//     },
//     //   //   },
//     // authEndpoint: process.env.NEXT_PUBLIC_URL_API + '/broadcasting/auth',
//   });
// };
// export const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY ?? '', {
//   cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER ?? 'ap1',
//   forceTLS: true,
// });
