const calculateSum = (array) => {
  let sum = 0;
  for (const item of array) {
    if (item % 3 === 0) {
      sum += item;
    }
  }
  return sum;
}
const colli= [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(colli));
