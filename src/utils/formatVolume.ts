const formatVolume = (value: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return formatter.format(value);
};

export default formatVolume;
