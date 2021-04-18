const getWhatsappTextLink = (text: string) => {
  return `https://wa.me/?text=${encodeURI(text)}`;
};

const getTelegramUrlTextLink = (url: string, text: string) => {
  return `https://t.me/share/url?url=${encodeURI(url)}&text=${encodeURI(text)}`;
};

export { getWhatsappTextLink, getTelegramUrlTextLink };
