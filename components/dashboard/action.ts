'use server'
import { delay } from "@/lib/Promise/Delay";

export async function handleSubmit(prevState: any, formData: FormData) {
  await delay(1000);
  const random = Math.floor(Math.random() * 2);

  if (random === 1)
    return {
      type: 'success',
      success: true,
      message: 'Testing Success',
    };
  return {
    type: 'error',
    message: 'Testing Error',
  };
}
