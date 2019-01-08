import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { get, uniqueId } from 'lodash';

export const addQuestion = createAction('ADD_QUESTION');
export const addAnswer = createAction('ADD_ANSWER');
export const deleteAnswer = createAction('DELETE_ANSWER');
export const deleteQuestion = createAction('DELETE_QUESTION');

export default handleActions({
  [addQuestion]: ({ questions, answers }, { payload: { name } }) => ({
    questions: [...questions, {
      id: uniqueId('question_'),
      name,
      answers: [...answers],
    }],
    answers: [],
  }),
  [addAnswer]: ({ questions, answers }, { payload: { name, status } }) => ({
    questions,
    answers: [...answers, {
      id: uniqueId('answer_'),
      name,
      status,
    }],
  }),
  [deleteAnswer]: ({ questions, answers }, { payload: { id } }) => ({
    questions,
    answers: answers.filter((answer) => answer.id !== id),
  }),
  [deleteQuestion]: ({ questions, answers }, { payload: { id } }) => ({
    answers,
    questions: questions.filter((question) => question.id !== id),
  }),
},
{
  questions: [],
  answers: [],
});


export const REDUCER_NAME = 'questionReducer';

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const questionsSelector = createSelector(stateSelector, (state) => get(state, 'questions'));
export const answersSelector = createSelector(stateSelector, (state) => get(state, 'answers'));
