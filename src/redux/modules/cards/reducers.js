import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { union } from 'ramda';
import types from './types';

// byId slice reducer
const byId = handleActions(
  {
    [types.ADD]: mergePayload
  },
  {}
);

function mergePayload(state, action) {
  return Object({}, state, hashify(action.payload));
}

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
  []
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
