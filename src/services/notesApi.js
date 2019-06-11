import { post } from './request';

export const createNote = note => {
  return post('/api/v1/notes', note);
}
;
