import reducer from './reducers';
import operations from './operations';
import initialState from './initialState';
import { getFromEnd } from 'utils/common';

describe(`notes module`, () => {
  const initAction = { type: '@@INIT' };
  const mockNote = {
    id: `note-1`,
    deck: `kanji`,
    type: `kanji`
  };

  it(`is initialized with initial state`, () => {
    const state = reducer(undefined, initAction);
    expect(state).toEqual(initialState);
  });

  it(`adds new id to allIds when using addNote`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addNote(mockNote);
    state = reducer(state, addAction);
    expect(state.allIds.length).toEqual(initialState.allIds.length + 1);
  });

  it(`adds item to byId hash when using addNote`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addNote(mockNote);
    state = reducer(state, addAction);
    const idOfItemAddedLast = getFromEnd(state.allIds);
    expect(state.byId[idOfItemAddedLast]).toEqual({
      id: idOfItemAddedLast,
      ...mockNote
    });
  });

  it(`creates unique ids for each new note`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addNote(mockNote);
    state = reducer(state, addAction);
    state = reducer(state, addAction);
    expect(getFromEnd(state.allIds)).not.toEqual(getFromEnd(state.allIds, 2));
  });
});
