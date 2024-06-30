import { isString } from 'util';

export const getTimeString = () => {
  const hour = new Date().toLocaleTimeString('id-ID', {
    timeStyle: 'short',
    timeZone: process.env.APP_TIMEZONE ?? 'Asia/Jakarta',
  });

  const finalHour = hour.split('.')[0] + ':00';

  return finalHour;
};

export const parseDateToTimeString = (dateString: string | Date) => {
  let date = new Date();
  if (isString(dateString)) {
    date = new Date(dateString);
  } else {
    date = dateString;
  }

  const hour = date.toLocaleTimeString('id-ID', {
    timeStyle: 'short',
    timeZone: process.env.APP_TIMEZONE ?? 'Asia/Jakarta',
  });

  const finalHour = hour.split('.')[0] + ':00';

  return finalHour;
};
