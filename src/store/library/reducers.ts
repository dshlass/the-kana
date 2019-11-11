import {
  LibraryActionTypes,
  Library,
  SET_HIRAGANA,
  SET_KATAKANA,
} from './types';

const initialState: Library = {
  library: [],
};

export const libraryReducer = (
  state = initialState,
  action: LibraryActionTypes,
) => {
  console.log('reducer working');
  switch (action.type) {
    case SET_HIRAGANA: {
      console.log('should be hiragana');
      return {
        library: [...state.library, action.payload],
      };
    }
    case SET_KATAKANA: {
      console.log('should be katakana');

      return {
        library: [...state.library, action.payload],
      };
    }
    default:
      return state;
  }
};
