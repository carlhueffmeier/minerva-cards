import reducer from '.';
import { selectors as cardSelectors } from './modules/cards';

describe(`rootReducer`, () => {
  const initAction = { type: '@@INIT' };

  const mockState = {
    decks: {
      byId: {
        kanji: {
          id: `kanji`,
          title: `Kanji`
        }
      },
      allIds: [`kanji`]
    },
    notes: {
      byId: {
        'note-1': {
          id: `note-1`,
          deck: `kanji`,
          type: `kanji`
        }
      },
      allIds: [`note-1`]
    },
    cards: {
      byId: {
        'card-1': {
          id: `card-1`,
          note: `note-1`,
          template: `kanji-production`
        },
        'card-2': {
          id: `card-2`,
          note: `note-1`,
          template: `kanji-reading`
        }
      },
      allIds: [`card-1`, `card-2`]
    }
  };

  it(`retrieves cards filtered by deck`, () => {
    let state = reducer(mockState, initAction);
    const cardsByDeck = cardSelectors.getCardsByDeck(state, `kanji`);
    expect(cardsByDeck).toEqual(cardSelectors.getAllCards(state));
  });
});
