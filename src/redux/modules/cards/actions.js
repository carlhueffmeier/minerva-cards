import { createAction } from 'redux-actions';
import types from './types';

const add = createAction(types.ADD);

export default {
  add
};
