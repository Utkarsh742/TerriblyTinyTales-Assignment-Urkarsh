export let totalWordsObj: WordCountType;

export const fetchData = async () => {
  try {
    const response = await fetch('https://www.terriblytinytales.com/test.txt');

    const textData = await response.text();

    const words = splitTextIntoWords(textData);
    const wordCountObj = countWords(words);
    totalWordsObj = wordCountObj;
    const topOccuringWords = getTopOccurringWords(wordCountObj, 20);

    return convertWordCountArrayToObject(topOccuringWords);
  } catch (err) {
    console.error(err);
  }
};

const splitTextIntoWords = (text: string) => {
  return text.split(/\s+/);
};

const countWords = (words: string[]) => {
  const wordCountObj: WordCountType = {};
  const specialCharRegex = /[!@#$%^&*–12354()_+[\]{};':"\\|,.<>/?-]/;

  words.forEach((word) => {
    if (specialCharRegex.test(word) === false) {
      word = word.toLowerCase();
      wordCountObj[word] = (wordCountObj[word] || 0) + 1;
    }
  });

  return wordCountObj;
};

const getTopOccurringWords = (wordCountObj: WordCountType, count: number) => {
  const sortedWords = Object.entries(wordCountObj).sort((a, b) => b[1] - a[1]);

  return sortedWords.slice(0, count);
};

const convertWordCountArrayToObject = (wordCountArray: [string, number][]) => {
  const wordCountObj: WordCountType = {};

  wordCountArray.forEach(([word, count]) => {
    wordCountObj[word] = count;
  });

  return wordCountObj;
};

export interface WordCountType {
  [key: string]: number;
}