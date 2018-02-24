// Location in the state tree
const getNotes = state => state.notes;

// Returns array of all notes
const getAllNotes = state => {
  const notes = getNotes(state);
  return notes.allIds.map(id => notes.byId[id]);
};

// Returns the note
const getNoteById = (state, id) => {
  const notes = getNotes(state);
  return notes.byId[id];
};

// Returns the note
const getNotesByDeck = (state, deck) => {
  return getAllNotes(state).filter(note => note.deck === deck);
};

// Returns the note
const getNotesByType = (state, type) => {
  return getAllNotes(state).filter(note => note.type === type);
};

export default {
  getNotes,
  getAllNotes,
  getNoteById,
  getNotesByDeck,
  getNotesByType
};
