import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { get, uniqueId } from 'lodash';

export const createQuestion = createAction('CREATE_QUESTION');
export const updateQuestionValue = createAction('UPDATE_QUESTION_VALUE');
export const updateQuestionType = createAction('UPDATE_QUESTION_TYPE');
export const addAnswer = createAction('ADD_ANSWER');

export default handleActions({
  [createQuestion]: (state) => ({ ...state, id: uniqueId('question_') }),
  [updateQuestionValue]: (state, { payload: { value } }) => ({ ...state, value }),
  [updateQuestionType]: (state, { payload: { value } }) => ({ ...state, type: value }),
  [addAnswer]: (state, { payload }) => ({
    ...state,
    answers: [...state.answers, {
      ...payload,
      id: uniqueId('answer_'),
    }],
  }),
},
{
  id: '',
  value: '',
  type: 'one',
  answers: [],
});


export const REDUCER_NAME = 'questionReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const questionsValueSelector = createSelector(stateSelector, (state) => get(state, 'value'));
export const questionTypeSelector = createSelector(stateSelector, (state) => get(state, 'type'));
export const answersSelector = createSelector(stateSelector, (state) => get(state, 'answers'));
