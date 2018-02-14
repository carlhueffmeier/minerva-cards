import actions from './actions';
import uuid from 'uuid/v4';

function addNote(properties) {
  const newNote = {
    id: uuid(),
    ...properties
  };
  return actions.add(newNote);
}

export default {
  addNote
};
