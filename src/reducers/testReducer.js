import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { get, uniqueId } from 'lodash';

export const createTest = createAction('CREATE_TEST');
export const updateTestValue = createAction('UPDATE_TEST_VALUE');
export const addQuestion = createAction('ADD_QUESTION_IN_TEST');

export default handleActions(
  {
    [createTest]: (state) => ({ ...state, id: uniqueId('test_') }),
    [updateTestValue]: (state, { payload: { value } }) => ({ ...state, value }),
    [addQuestion]: (state, { payload: { type, value } }) => ({
      ...state,
      questions: [...state.questions, {
        type,
        value,
      }],
    }),
  },
  {
    id: '',
    value: '',
    questions: [],
  },
);

export const REDUCER_NAME = 'testReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const testValueSelector = createSelector(stateSelector, (state) => get(state, 'value'));
export const questionsSelector = createSelector(stateSelector, (state) => get(state, 'questions'));
