import { combineReducers } from 'redux';
import cards from './modules/cards';
import notes from './modules/notes';
import decks from './modules/decks';
import templates from './modules/templates';
import types from './modules/types';

const rootReducer = combineReducers({
  cards,
  notes,
  decks,
  templates,
  types
});

export default rootReducer;
