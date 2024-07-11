'use client';
export const DateToString = (date: string) => {
  const result = new Date(date);

  return result.toLocaleDateString('id-ID', {
    dateStyle: 'medium',
    timeZone: 'asia/jakarta',
  });
};

const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

export const getMonthString = (range: number) => {
  const startRange = range * -1;
  const endRange = range * 1;

  let resultArray = [];
  for (let index = startRange; index < endRange; index++) {
    let date = new Date();
    date.setMonth(new Date().getMonth() + index);

    const result = months[date.getMonth()];

    resultArray.push({
      display: result + '-' + date.getFullYear(),
      value: date.getMonth() + 1 + '-' + date.getFullYear(),
    });
  }

  return resultArray;
};
