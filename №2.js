function swap(array) {
  if (array.length < 2) {
    return arr;
  }

  const lastIndex = array.length - 1;
  const firstItem = array[0];
  const lastItem = array[lastIndex];

  array[0] = lastItem;
  array[lastIndex] = firstItem;

  return array;
}
 console.log(swap([0, 1, 2]));
