// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import { SYNC } from './constants';

export function syncCall(info) {
  return {
    type: SYNC,
    info
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SYNC:
      return {
        ...state,
        [action.info.reducerName]: action.info.value
      };

    default:
      return state;
  }
}
