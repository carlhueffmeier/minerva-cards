import reducer from './reducers';
import operations from './operations';

describe(`cards module`, () => {
  it(`correctly adds id to allIds when using addCard`, () => {
    const card = { id: 1 };
    const action = operations.addCard(card);
    const nextState = reducer(undefined, action);
    expect(nextState.allIds).toEqual([1]);
  });

  it(`correctly adds item to byId hash when using addCard`, () => {
    const card = { id: 1 };
    const action = operations.addCard(card);
    const nextState = reducer(undefined, action);
    expect(nextState.byId).toEqual({ [card.id]: card });
  });

  it(`does not create duplicates`, () => {
    const card = { id: 1 };
    const action = operations.addCard(card);
    const initialState = reducer(undefined, action);
    const nextState = reducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });
});
