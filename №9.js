function makeCensored(text, stopWords) {
  const words = text.split(' ');
  const replacedWords = words.map((word) => {
    if (stopWords.includes(word)) {
      return '$#%!';
    }
    return word;
  });
  return replacedWords.join(' ');
}
const sentence = 'When you play the game of thrones, you win or die';
const result = makeCensored(sentence, ['die', 'play']);
console.log(result)
