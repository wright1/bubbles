export const shuffle = arrToShuffle => {
  for (let i = arrToShuffle.length - 1; i > 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrToShuffle[i], arrToShuffle[j]] = [arrToShuffle[j], arrToShuffle[i]];
  }

  return arrToShuffle;
};
