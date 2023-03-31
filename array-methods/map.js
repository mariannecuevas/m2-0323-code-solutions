const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const newPrices = prices.map((amount) => {
  return { price: amount, salePrice: amount / 2 };
});

console.log('Price objects: ', newPrices);

const formattedPrices = prices.map((amount) => {
  return '$' + amount.toFixed(2);
});

console.log('Formatted prices: ', formattedPrices);
