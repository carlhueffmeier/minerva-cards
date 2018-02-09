import { createAction } from 'redux-actions';
import types from './types';

const addCard = createAction(types.ADD);

export default {
  addCard
};
