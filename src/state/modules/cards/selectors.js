// Location in the state tree
const getCards = state => state.cards;

// Returns array of all cards
const getAllCards = state => {
  const cards = getCards(state);
  return cards.allIds.map(id => cards.byId[id]);
};

export default {
  getCards,
  getAllCards
};
