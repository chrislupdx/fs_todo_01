export const createNote = note => {
  return Promise.resolve({
    _id: '123',
    ...note
  });
}
;
