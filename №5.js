function reverse(array) {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}
const names= ['john', 'smith', 'karl'];
reverse(names);
console.log(names);
