import { combineReducers } from 'redux';
import notes from './modules/notes';
import decks from './modules/decks';

const rootReducer = combineReducers({
  notes,
  decks
});

export default rootReducer;
