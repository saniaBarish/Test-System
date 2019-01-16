import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './QuestionPage.css';

import {
  questionsSelector,
  answersSelector,
  addAnswer,
  addQuestion,
  deleteAllElements,
} from '../../reducers/questionReducer';

import TestSystemLists from '../../components/TestSystemLists';
import AddQuestion from '../AddQuestion';
import ListElements from '../../components/ListElements';
import Question from '../Question';

const mapStateToProps = (state) => ({
  questions: questionsSelector(state),
  answers: answersSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    addAnswer: (payload) => dispatch(addAnswer(payload)),
    addQuestion: (payload) => dispatch(addQuestion(payload)),
    deleteAllElements: (type) => dispatch(deleteAllElements({ type })),
  },
});

const QuestionPage = ({ answers, questions, actions }) => {
  return (
    <div className="question-page">
      <TestSystemLists>
        <ListElements
          elements={questions}
          View={Question}
          deleteAllElements={actions.deleteAllElements}
        />
      </TestSystemLists>
      <AddQuestion
        answers={answers}
        addAnswer={actions.addAnswer}
        addQuestion={actions.addQuestion}
        deleteAllAnswer={actions.deleteAllElements}
      />
    </div>
  );
};

QuestionPage.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionPage);
