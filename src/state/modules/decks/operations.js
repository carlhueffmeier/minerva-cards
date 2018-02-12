import actions from './actions';
import uuid from 'uuid/v4';

function addDeck(title) {
  const newDeck = {
    id: uuid(),
    title
  };
  return actions.add(newDeck);
}

export default {
  addDeck
};
