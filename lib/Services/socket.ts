"use client";

import { io } from "socket.io-client";

// export const socket = !process.env.NEXT_PUBLIC_SOCKET_URL ? io() : io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:4000');

export const socket = null;
