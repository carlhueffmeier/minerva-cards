import reducer from './reducers';
import operations from './operations';
import initialState from './initialState';
import { getFromEnd } from 'utils/common';

describe(`types module`, () => {
  const initAction = { type: '@@INIT' };
  const mockType = {
    name: `Kanji`,
    fields: [`Kanji`, `Reading`, `Examples`],
    templates: [`Reading`, `Production`]
  };

  it(`is initialized with initial state`, () => {
    const state = reducer(undefined, initAction);
    expect(state).toEqual(initialState);
  });

  it(`adds new id to allIds when using addType`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addType(mockType);
    state = reducer(state, addAction);
    expect(state.allIds.length).toEqual(initialState.allIds.length + 1);
  });

  it(`adds item to byId hash when using addType`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addType(mockType);
    state = reducer(state, addAction);
    const idOfItemAddedLast = state.allIds.slice(-1)[0];
    expect(state.byId[idOfItemAddedLast]).toEqual({
      id: idOfItemAddedLast,
      ...mockType
    });
  });

  it(`creates unique ids for each new type`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addType(mockType);
    state = reducer(state, addAction);
    state = reducer(state, addAction);
    expect(getFromEnd(state.allIds)).not.toEqual(getFromEnd(state.allIds, 2));
  });
});
