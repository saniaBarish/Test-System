import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { get, uniqueId } from 'lodash';

export const addQuestion = createAction('ADD_QUESTION');
export const addAnswer = createAction('ADD_ANSWER');
export const deleteOneElement = createAction('DELETE_ONE_ELEMENT_QUESTION_REDUCER');
export const deleteAllElements = createAction('DELETE_ALL_ELEMENT_QUESTION_REDUCER');
export const changeElement = createAction('CHANGE_ELEMENT_QUESTION_REDUCER');

export default handleActions({
  [addQuestion]: ({ questions, answers }, { payload: { name } }) => ({
    questions: [...questions, {
      id: uniqueId('question_'),
      name,
      type: 'questions',
      answers: [...answers],
      checked: false,
    }],
    answers: [],
  }),
  [addAnswer]: ({ questions, answers }, { payload: { name, status } }) => ({
    questions,
    answers: [...answers, {
      id: uniqueId('answer_'),
      name,
      status,
      type: 'answers',
      checked: false,
    }],
  }),
  [deleteOneElement]: (state, { payload: { type, id } }) => ({
    ...state,
    [type]: state[type].filter((elem) => elem.id !== id),
  }),
  [deleteAllElements]: (state, { payload: { type } }) => ({ ...state, [type]: [] }),
  [changeElement]: (state, { payload: { type, id, name, value } }) => ({
    ...state,
    [type]: state[type].map((elem) => {
      if (elem.id === id) {
        return ({
          ...elem,
          [name]: value,
        });
      }
      return elem;
    }),
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
