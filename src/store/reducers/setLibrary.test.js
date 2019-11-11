import setLibrary from '../library/reducer'

test('setLibrary test', () => {
  const listBefore=[];
  const action = {
    type : "SET_LIBRARY",
    library: [1,2,3]
  }
  const listAfter = [1,2,3];
  Object.freeze(listBefore);

  expect(setLibrary(listBefore, action)).toEqual(listAfter);
})