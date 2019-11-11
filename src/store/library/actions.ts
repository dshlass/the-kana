import hiragana from '../../data/hiragana';
import katakana from '../../data/katakana';
import { SET_HIRAGANA, SET_KATAKANA } from './types';

export const setKatakana = () => ({
  type: SET_KATAKANA,
  payload: katakana,
});

export const setHiragana = () => ({
  type: SET_HIRAGANA,
  payload: hiragana,
});
