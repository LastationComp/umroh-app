import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const initialMessage = {
  success: false,
  type: "error",
  message: "",
};

export function shuffleArray(array: any[]) {
  // Buat salinan array agar tidak mengubah array asli
  const shuffledArray = [...array];

  // Lakukan pengacakan menggunakan algoritma Fisher-Yates
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
