import reducer from './reducers';
import operations from './operations';
import initialState from './initialState';
import { getFromEnd } from 'utils/common';

describe(`cards module`, () => {
  const initAction = { type: '@@INIT' };
  const mockCard = {
    note: `note-1`,
    template: `Reading`
  };

  it(`is initialized with initial state`, () => {
    const state = reducer(undefined, initAction);
    expect(state).toEqual(initialState);
  });

  it(`adds new id to allIds when using addCard`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addCard(mockCard);
    state = reducer(state, addAction);
    expect(state.allIds.length).toEqual(initialState.allIds.length + 1);
  });

  it(`adds item to byId hash when using addCard`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addCard(mockCard);
    state = reducer(state, addAction);
    const idOfItemAddedLast = getFromEnd(state.allIds);
    expect(state.byId[idOfItemAddedLast]).toEqual({
      id: idOfItemAddedLast,
      ...mockCard
    });
  });

  it(`creates unique ids for each new card`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addCard(mockCard);
    state = reducer(state, addAction);
    state = reducer(state, addAction);
    expect(getFromEnd(state.allIds)).not.toEqual(getFromEnd(state.allIds, 2));
  });
});
