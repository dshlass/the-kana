export interface Word {
  set: string;
  table: string;
  row: string;
  column: string;
  letter: string;
  symbol: string;
}

export interface Library {
  library: any[];
}

export const SET_KATAKANA = 'SET_KATAKANA';
export const SET_HIRAGANA = 'SET_HIRAGANA';

interface SetHiragana {
  type: typeof SET_HIRAGANA;
  payload: any;
}
interface SetKatakana {
  type: typeof SET_KATAKANA;
  payload: any;
}

export type LibraryActionTypes = SetHiragana | SetKatakana;
