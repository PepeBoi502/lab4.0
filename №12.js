const getMax = (arr) => {
  let [max, ...rest] = arr;
  for (const item of rest) {
    if (item > max) {
      max = item;
    }
  }
  return max;
};
console.log(getMax([1, 10, 8]));
