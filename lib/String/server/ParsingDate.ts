"use server";

import { isString } from "util";

export const getTimeString = () => {
  const hour = new Date().toLocaleTimeString("id-ID", {
    timeStyle: "short",
    timeZone: "Asia/Jakarta",
  });

  const finalHour = hour.split(".")[0] + ":00";

  return finalHour;
};

export const parseDateToTimeString = (dateString: string | Date) => {
  let date = new Date();
  if (isString(dateString)) {
    date = new Date(dateString + " GMT");
  } else {
    date = dateString;
  }

  const hour = date.toLocaleTimeString("id-ID", {
    timeStyle: "short",
    timeZone: "Asia/Jakarta",
  });

  const finalHour = hour.split(".")[0] + ":00";

  return finalHour;
};
