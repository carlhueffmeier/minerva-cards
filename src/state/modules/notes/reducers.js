import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import types from './types';
import { mergePayload, includeInAllIds } from 'state/utils';

// byId slice reducer
//
// It keeps a hash formatted like this
// state = {
//   123: {
//     id: 123
//     /* data... */
//   },
//   124: {
//     id: 124
//     /* data... */
//   },
// }
const byId = handleActions(
  {
    [types.ADD]: mergePayload
  },
  {} // initial state
);

// allIds slice reducer
const allIds = handleActions(
  {
    [types.ADD]: includeInAllIds
  },
  [] // initial state
);

// notes reducer
const reducer = combineReducers({
  byId,
  allIds
});

export default reducer;
