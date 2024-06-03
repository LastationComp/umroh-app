export const getImageClient = (url: string) => {
  return process.env.NEXT_PUBLIC_APP_URL + "/api/image?url=" + url;
};
