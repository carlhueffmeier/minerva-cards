// Location in the state tree
const getDecks = state => state.decks;

// Returns array of all decks
const getAllDecks = state => {
  const decks = getDecks(state);
  return decks.allIds.map(id => decks.byId[id]);
};

// Returns the deck
const getDeckById = (state, id) => {
  const decks = getDecks(state);
  return decks.byId[id];
};

export default {
  getDecks,
  getAllDecks,
  getDeckById
};
