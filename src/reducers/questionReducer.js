import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { get, uniqueId } from 'lodash';

export const updateQuestionValue = createAction('UPDATE_QUESTION_VALUE');
export const updateQuestionType = createAction('UPDATE_QUESTION_TYPE');
export const addAnswer = createAction('ADD_ANSWER');

export default handleActions({
  [updateQuestionValue]: (state, { payload: { value } }) => ({ ...state, value }),
  [updateQuestionType]: (state, { payload: { type } }) => ({ ...state, type }),
  [addAnswer]: (state, { payload }) => ({
    ...state,
    answers: [...state.answers, {
      id: uniqueId('answer'),
      ...payload,
    }],
  }),
},
{
  value: '',
  type: '',
  answers: [],
});


export const REDUCER_NAME = 'questionReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const questionsValueSelector = createSelector(stateSelector, (state) => get(state, 'value'));
export const answersSelector = createSelector(stateSelector, (state) => get(state, 'answers'));