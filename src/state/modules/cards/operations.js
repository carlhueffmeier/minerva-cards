import actions from './actions';
import uuid from 'uuid/v4';

function addCard(properties) {
  const newCard = {
    id: uuid(),
    ...properties
  };
  return actions.add(newCard);
}

export default {
  addCard
};
