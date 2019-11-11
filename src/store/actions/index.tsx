import hiragana from '../../data/hiragana';
import katakana from '../../data/katakana';

export const setKatakana = () => ({
  type: 'SET_LIBRARY',
  library: katakana,
});

export const setHiragana = () => ({
  type: 'SET_LIBRARY',
  library: hiragana,
});
