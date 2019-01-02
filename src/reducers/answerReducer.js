import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { get } from 'lodash';

export const updateAnswerValue = createAction('UPDATE_ANSWER_VALUE');
export const updateAnswerStatus = createAction('UPDATE_ANSWER_STATUS');
export const clearAnswerInputs = createAction('CLEAR_ANSWER_INPUTS');

export default handleActions({
  [updateAnswerValue]: (state, { payload: { value } }) => ({ ...state, value }),
  [updateAnswerStatus]: (state, { payload: { status } }) => ({ ...state, status }),
  [clearAnswerInputs]: (state) => ({
    ...state,
    value: '',
    status: '',
  }),
}, {
  value: '',
  status: '',
});

export const REDUCER_NAME = 'answerReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const answerValueSelector = createSelector(stateSelector, (state) => get(state, 'value'));
export const answerStatusSelector = createSelector(stateSelector, (state) => get(state, 'status'));
