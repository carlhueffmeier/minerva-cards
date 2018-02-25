import actions from './actions';
import uuid from 'uuid/v4';

function addTemplate(properties) {
  const newTemplate = {
    id: uuid(),
    ...properties
  };
  return actions.add(newTemplate);
}

export default {
  addTemplate
};
