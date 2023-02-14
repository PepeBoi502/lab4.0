const getSameParity = (array) => {
  if (array.length === 0) {
    return [];
  }

  const result = [];
  const remainder = Math.abs(array[0] % 2);
  for (const item of array) {
    if (Math.abs(item % 2) === remainder) {
      result.push(item);
    }
  }
  return result;
}
const numbers = [1, 2, 3];
console.log(getSameParity(numbers));
