function isEnoughCapacity(products, containerSize) {
  let sum = 0;
  const productQuantity = Object.values(products);

  for (const value of productQuantity) {
    sum += value;
  }
  return sum <= containerSize;
}