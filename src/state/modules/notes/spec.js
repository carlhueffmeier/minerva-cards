import reducer from './reducers';
import operations from './operations';

describe(`notes module`, () => {
  const note = { deck: 1 };

  it(`correctly adds id to allIds when using addNote`, () => {
    const action = operations.addNote(note);
    const nextState = reducer(undefined, action);
    expect(nextState.allIds.length).toEqual(1);
  });

  it(`correctly adds item to byId hash when using addNote`, () => {
    const action = operations.addNote(note);
    const nextState = reducer(undefined, action);
    const id = nextState.allIds[0];
    expect(nextState.byId[id]).toEqual({ id, ...note });
  });

  it(`does create unique ids for each new note`, () => {
    const action = operations.addNote(note);
    const initialState = reducer(undefined, action);
    const nextState = reducer(initialState, action);
    expect(nextState.allIds[0]).not.toEqual(nextState.allIds[1]);
  });
});
