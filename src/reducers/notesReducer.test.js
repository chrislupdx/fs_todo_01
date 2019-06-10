import reducer from './notesReducer';
import { newNote, NEW_NOTE_PENDING, NEW_NOTE } from '../actions/noteAction';

describe('notes reducer', () => {
  it('handles the NEW_NOTE_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

  it('handles the NEW_NOTE action', () => {
    const initialState = {
      loading: true,
      list: []
    };

    const newState = reducer(initialState, {
      type: NEW_NOTE,
      payload: {
        title: 'hi',
        body: 'bye'
      }
    });

    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'hi', body: 'bye' }]
    });
  });
});
