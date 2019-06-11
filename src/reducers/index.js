import { combineReducers } from 'redux';
import notes from './notesReducer.js';
import session from './sessionReducer';


export default combineReducers({
  session,
  notes
});
