import reducer from './reducers';
import operations from './operations';

describe(`decks module`, () => {
  const deckTitle = `__TEST__`;

  it(`correctly adds id to allIds when using addDeck`, () => {
    const action = operations.addDeck(deckTitle);
    const nextState = reducer(undefined, action);
    expect(nextState.allIds.length).toEqual(1);
  });

  it(`correctly adds item to byId hash when using addDeck`, () => {
    const action = operations.addDeck(deckTitle);
    const nextState = reducer(undefined, action);
    const id = nextState.allIds[0];
    expect(nextState.byId[id]).toEqual({ id, title: deckTitle });
  });

  it(`does create unique ids for each new deck`, () => {
    const action = operations.addDeck(deckTitle);
    const initialState = reducer(undefined, action);
    const nextState = reducer(initialState, action);
    expect(nextState.allIds[0]).not.toEqual(nextState.allIds[1]);
  });
});
