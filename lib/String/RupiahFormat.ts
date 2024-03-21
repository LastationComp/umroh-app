const rupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  compactDisplay: 'short',
  currencyDisplay: 'symbol',
});

export const formatRupiah = (number: number) => {
  return rupiah.format(number).replace(',00', '');
};
