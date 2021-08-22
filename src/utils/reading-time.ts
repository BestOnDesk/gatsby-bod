import { stripHtml, stripWhiteSpace } from "./string";

const WORDS_PER_MIN = 275; //wpm
const IMAGE_READ_TIME = 12;
const CHINESE_KOREAN_READ_TIME = 500; //cpm
const IMAGE_TAGS = ["img"];

const imageCount = (imageTags: string[], string: string) => {
  const combinedImageTags = imageTags.join("|");
  const pattern = `<(${combinedImageTags})([\\w\\W]+?)[\\/]?>`;
  const reg = new RegExp(pattern, "g");
  return (string.match(reg) || []).length;
};

const imageReadTime = (string: string) => {
  let seconds = 0;
  const count = imageCount(IMAGE_TAGS, string);

  if (count > 10) {
    seconds = (count / 2) * (IMAGE_READ_TIME + 3) + (count - 10) * 3; // n/2(a+b) + 3 sec/image
  } else {
    seconds = (count / 2) * (2 * IMAGE_READ_TIME + (1 - count)); // n/2[2a+(n-1)d]
  }
  return {
    time: seconds / 60,
    count,
  };
};

const stripTags = (string: string): string => {
  const pattern = "<\\w+(\\s+(\"[^\"]*\"|\\'[^\\']*'|[^>])+)?>|<\\/\\w+>";
  const reg = new RegExp(pattern, "gi");
  return string.replace(reg, "");
};

const wordsCount = (string: string): number => {
  const pattern = "\\w+";
  const reg = new RegExp(pattern, "g");
  return (string.match(reg) || []).length;
};

// Chinese / Japanese / Korean
const otherLanguageReadTime = (string: string) => {
  const pattern =
    "[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]";
  const reg = new RegExp(pattern, "g");
  const count = (string.match(reg) || []).length;
  const time = count / CHINESE_KOREAN_READ_TIME;
  const formattedString = string.replace(reg, "");
  return {
    count,
    time,
    formattedString,
  };
};

const wordsReadTime = (string: string, wordsPerMin = WORDS_PER_MIN) => {
  const {
    count: characterCount,
    time: otherLanguageTime,
    formattedString,
  } = otherLanguageReadTime(string);
  const wordCount = wordsCount(formattedString);
  const wordTime = wordCount / wordsPerMin;
  return {
    characterCount,
    otherLanguageTime,
    wordTime,
    wordCount,
  };
};

const humanizeTime = (time: number): string => {
  if (time < 0.5) {
    return "Meno di un minuto";
  }
  if (time >= 0.5 && time < 1.5) {
    return "1 minuto";
  }
  return `${Math.ceil(time)} minuti`;
};

const getReadingTimeString = (string: string): string => {
  const { time: imageTime, count: imageCount } = imageReadTime(string);
  const strippedString = stripHtml(stripWhiteSpace(string))
    .replace(/\.\.\./g, " ")
    .trim() // Remove HTML
    .replace(/\s+/g, " ");
  const { characterCount, otherLanguageTime, wordTime, wordCount } =
    wordsReadTime(strippedString);

  return humanizeTime(imageTime + wordTime);
};

export { getReadingTimeString, humanizeTime };
