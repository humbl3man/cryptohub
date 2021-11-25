export default function formatPrice(price) {
  const converter = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
    minimumFractionDigits: 2
  });
  return converter.format(price);
}
