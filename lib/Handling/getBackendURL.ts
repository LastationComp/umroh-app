export function BackendURL(url: string) {
  return new URL(process.env.NEXT_PUBLIC_URL_API + url);
}
