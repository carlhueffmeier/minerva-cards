import reducer from './reducers';
import operations from './operations';
import initialState from './initialState';
import { getFromEnd } from 'utils/common';

describe(`templates module`, () => {
  const initAction = { type: '@@INIT' };
  const mockTemplate = {
    name: `Kanji Production`,
    front: `Write it down!<br>{{Reading}}<br>({{Meaning}})`,
    back: `{{Kanji}}<br>{{Reading}}<br>({{Meaning}})`
  };

  it(`is initialized with initial state`, () => {
    const state = reducer(undefined, initAction);
    expect(state).toEqual(initialState);
  });

  it(`adds new id to allIds when using addTemplate`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addTemplate(mockTemplate);
    state = reducer(state, addAction);
    expect(state.allIds.length).toEqual(initialState.allIds.length + 1);
  });

  it(`adds item to byId hash when using addTemplate`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addTemplate(mockTemplate);
    state = reducer(state, addAction);
    const idOfItemAddedLast = state.allIds.slice(-1)[0];
    expect(state.byId[idOfItemAddedLast]).toEqual({
      id: idOfItemAddedLast,
      ...mockTemplate
    });
  });

  it(`creates unique ids for each new template`, () => {
    let state = reducer(undefined, initAction);
    const addAction = operations.addTemplate(mockTemplate);
    state = reducer(state, addAction);
    state = reducer(state, addAction);
    expect(getFromEnd(state.allIds)).not.toEqual(getFromEnd(state.allIds, 2));
  });
});
