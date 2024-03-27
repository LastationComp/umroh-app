export const delay = (time: number) => {
  return new Promise((resolve: any) => setTimeout(resolve, time));
};
