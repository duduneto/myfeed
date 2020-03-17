import initialState from '../initialState';
import { reducer as syncCallReducer } from './syncCall';
import { reducer as syncManyCallsReducer } from './syncManyCalls';
import { reducer as asyncCallReducer } from './asyncCall';

const reducers = [syncCallReducer, asyncCallReducer, syncManyCallsReducer];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
