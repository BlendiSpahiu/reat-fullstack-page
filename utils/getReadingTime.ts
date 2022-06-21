export const getReadingTime = (content: string) => {
  const wpm = 255;
  const words = content.trim().split(/\s+/).length;
  const time = Math.ceil(Number(words) / wpm);
  return time + ' min';
};
