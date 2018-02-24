import { combineReducers } from 'redux';
import notes from './modules/notes';
import decks from './modules/decks';
import types from './modules/types';

const rootReducer = combineReducers({
  notes,
  decks,
  types
});

export default rootReducer;
