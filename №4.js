function addPrefix(array, prefix) {
  return array.map((str) => `${prefix} ${str}`);
}
const names = ['john', 'smith', 'karl'];
const newNames = addPrefix(names, 'Mr');
console.log(newNames);
