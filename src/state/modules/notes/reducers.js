import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import initialState from './initialState';
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
  initialState.byId
);

// allIds slice reducer
const allIds = handleActions(
  {
    [types.ADD]: includeInAllIds
  },
  initialState.allIds
);

// notes reducer
const reducer = combineReducers({
  byId,
  allIds
});

export default reducer;
