// Location in the state tree
const getTypes = state => state.types;

// Returns array of all types
const getAllTypes = state => {
  const types = getTypes(state);
  return types.allIds.map(id => types.byId[id]);
};

// Returns the type
const getTypeById = (state, id) => {
  const types = getTypes(state);
  return types.byId[id];
};

export default {
  getTypes,
  getAllTypes,
  getTypeById
};
