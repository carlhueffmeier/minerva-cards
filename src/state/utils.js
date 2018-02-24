import { union } from 'ramda';

// Merges plain object payload with byId, a hash indexed by item.id
export function mergePayload(byId, action) {
  return Object.assign({}, byId, hashify(action.payload));
}

// item -> { id: item }
export function hashify(item) {
  return {
    [item.id]: item
  };
}

export function includeInAllIds(allIds, action) {
  return union(allIds, [action.payload.id]);
}
