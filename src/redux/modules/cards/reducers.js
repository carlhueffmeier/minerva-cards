import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { union } from 'ramda';
import types from './types';

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

// Merges state, which is a hash
function mergePayload(state, action) {
  return Object({}, state, hashify(action.payload));
}

// item -> { id: item }
function hashify(item) {
  return {
    [item.id]: item
  };
}

// allIds slice reducer
const allIds = handleActions(
  {
    [types.ADD]: addId
  },
  [] // initial state
);

function addId(state, action) {
  return union(state, [action.payload.id]);
}

// Cards reducer
const reducer = combineReducers({
  byId,
  allIds
});

export default reducer;
