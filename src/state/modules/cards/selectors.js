import { selectors as noteSelectors } from 'state/modules/notes';

// Location in the state tree
const getCards = state => state.cards;

// Returns array of all cards
const getAllCards = state => {
  const cards = getCards(state);
  return cards.allIds.map(id => cards.byId[id]);
};

// Returns the card
const getCardById = (state, id) => {
  const cards = getCards(state);
  return cards.byId[id];
};

// Returns all cards belonging to notes of a specific deck
const getCardsByDeck = (state, deckId) => {
  const noteIdsOfDeck = noteSelectors
    .getNotesByDeck(state, deckId)
    .map(note => note.id);
  return getAllCards(state).filter(card => noteIdsOfDeck.includes(card.note));
};

export default {
  getCards,
  getAllCards,
  getCardById,
  getCardsByDeck
};
