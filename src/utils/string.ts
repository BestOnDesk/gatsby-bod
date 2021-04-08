const stripHtml = (string: string): string => {
  return string.replace(/(<([^>]+)>)/gi, " ").trim();
};

const stripMultipleSpaces = (string: string): string => {
  return string.replace(/\s+/g, " ");
};

const stripWhiteSpace = (string: string): string => {
  return string.replace(/^\s+/, "").replace(/\s+$/, "");
};

const stripPunctuation = (string: string): string => {
  return string.replace(/[.,\/#!$%^&*;:{}=\-_`~()?'\"|\+\[\]@]/g, " ");
};

const newLinesToBr = (string: string): string => {
  return string.replace(/(?:\r\n|\r|\n|&#13;|&#10;)/g, "<br/>");
};

export {
  stripHtml,
  stripMultipleSpaces,
  stripPunctuation,
  newLinesToBr,
  stripWhiteSpace,
};
