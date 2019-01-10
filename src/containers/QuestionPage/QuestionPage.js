import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './QuestionPage.css';

import {
  questionsSelector,
  answersSelector,
  addAnswer,
  addQuestion,
} from '../../reducers/questionReducer';

import TestSystemLists from '../../components/TestSystemLists';
import AddQuestion from '../AddQuestion';
import ListElements from '../../components/TestSystemLists/ListElements';
import Question from '../../components/TestSystemLists/ListElements/Question';

const mapStateToProps = (state) => ({
  questions: questionsSelector(state),
  answers: answersSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    addAnswer: (payload) => dispatch(addAnswer(payload)),
    addQuestion: (payload) => dispatch(addQuestion(payload)),
  },
});

const QuestionPage = ({ answers, questions, actions }) => {
  return (
    <div className="question-page">
      <TestSystemLists>
        <ListElements elements={questions} View={Question} />
      </TestSystemLists>
      <AddQuestion
        answers={answers}
        addAnswer={actions.addAnswer}
        addQuestion={actions.addQuestion}
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
