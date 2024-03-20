export const formatDate = (date: any) => {
  const get_date = new Date(date).toDateString();
  const dateArray = get_date.split(' ');
  return dateArray[2] + ' ' + dateArray[1] + ' ' + dateArray[3];
};
