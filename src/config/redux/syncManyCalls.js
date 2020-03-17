// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import { MANY_SYNC } from './constants';

export function syncManyCall(info) {
  return {
    type: MANY_SYNC,
    info
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case MANY_SYNC:
      return {
        ...state,
        ...action.info
      };

    default:
      return state;
  }
}
