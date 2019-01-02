import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { get } from 'lodash';

export const onLoading = createAction('ON_LOADING');
export const offLoading = createAction('OFF_LOADING');

export default handleActions({
  [onLoading]: (state) => ({ ...state, loading: true }),
  [offLoading]: (state) => ({ ...state, loading: false }),
}, { loading: false });

export const REDUCER_NAME = 'loadingReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const loadingSelector = createSelector(stateSelector, (state) => get(state, 'loading'));
