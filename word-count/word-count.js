const RegXp_words = /\w+('\w+)?/gi;

export const countWords = (words = '') => {
  let countedWords = {};
  words
    .toLowerCase()
    .match(RegXp_words)
    .forEach( (word) => {         
      countedWords[word]? countedWords[word]++ : countedWords[word] = 1;
    });
  return countedWords;
};
