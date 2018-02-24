import actions from './actions';
import uuid from 'uuid/v4';

function addType(properties) {
  const newType = {
    id: uuid(),
    ...properties
  };
  return actions.add(newType);
}

export default {
  addType
};
