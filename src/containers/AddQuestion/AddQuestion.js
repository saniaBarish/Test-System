import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddQuestion.css';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import TestSystemLists from '../../components/TestSystemLists';
import ListElements from '../../components/TestSystemLists/ListElements';
import Answer from '../../components/TestSystemLists/ListElements/Answer';

class AddQuestion extends Component {
  static defaultProps = {
    answers: [{
      id: 'answer_',
      name: 'No answers added...',
      status: false,
      checked: false,
    }],
  }

  static propTypes = {
    addAnswer: PropTypes.func.isRequired,
    addQuestion: PropTypes.func.isRequired,
    deleteAllAnswer: PropTypes.func.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.bool,
      checked: PropTypes.bool,
    })),
  }

  onClickAddAnswer = () => {
    this.props.addAnswer({
      name: this.answerInput.value,
      status: this.checkBox.checked,
    });
    this.answerInput.value = '';
    this.checkBox.checked = false;
  }

  onClickSaveQuestion = () => {
    this.props.addQuestion({ name: this.questionInput.value });
    this.questionInput.value = '';
  }

  render() {
    return (
      <div className="add-question">
        <h2>Create Question</h2>
        <Input placeholder="Enter question" refInput={(node) => { this.questionInput = node; }} />
        <TestSystemLists type="answers" listName="Answer List">
          <ListElements
            elements={this.props.answers}
            onClickClearList={this.props.deleteAllAnswer}
            View={Answer}
          />
        </TestSystemLists>
        <Input placeholder="Enter answer" refInput={(node) => { this.answerInput = node; }} />
        <CheckBox label="current answer" refCheckBox={(node) => { this.checkBox = node; }} />
        <div className="btn-group">
          <Button value="Add answer" className="btn btn-outline-primary" onClick={this.onClickAddAnswer} />
          <Button value="Save question" className="btn btn-outline-success" onClick={this.onClickSaveQuestion} />
        </div>
      </div>
    );
  }
}

export default AddQuestion;
