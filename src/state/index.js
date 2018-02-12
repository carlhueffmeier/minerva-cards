import { combineReducers } from 'redux';
import cards from './modules/cards';
import decks from './modules/decks';

const rootReducer = combineReducers({
  cards,
  decks
});

export default rootReducer;
