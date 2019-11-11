const setLibrary = (state=[], action) => {
  switch(action.type) {
    case "SET_LIBRARY":
      return [
        ...state,
        ...action.library
          ]
    default: 
      return state;
  }
};

export default setLibrary