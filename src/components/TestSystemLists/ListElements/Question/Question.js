import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Question.css';

import { deleteQuestion } from '../../../../reducers/questionReducer';

import TrashButton from '../../../TrashButton';
import CheckBox from '../../../CheckBox';

const mapDispatchToProps = (dispatch) => ({
  deleteQuestion: (payload) => dispatch(deleteQuestion(payload)),
});

class Question extends Component {
  static defaultProps = {
    element: {
      id: 'question_1',
      name: 'No question',
      answers: [{
        id: 'answer_1',
        name: 'No answer',
        status: false,
        checked: false,
      }],
      checked: false,
    },
    deleteQuestion: () => {},
  }

  static propTypes = {
    element: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      answers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        status: PropTypes.bool,
        checked: PropTypes.bool,
      })),
      checked: PropTypes.bool,
    }),
    deleteQuestion: PropTypes.func,
  }

  render() {
    const { element } = this.props;
    return (
      <div className="question">
        <div className="list-group-item list-group-item-action">
          <div className="question-body">
            <CheckBox id={element.id} />
            <div className="question-btn">
              <TrashButton onClick={() => this.props.deleteQuestion({ id: element.id })} />
            </div>
            <div className="question-name">
              {element.name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Question);
