function countUniqChars(str) {
  const chars = str.split('');
  const uniqueChars = [];
  chars.forEach((char) => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  });
  return uniqueChars.length;
}
const text1= 'You know nothing Jon Snow'
console.log(countUniqChars(text1));
