import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      <div className="element-body">
        <div className="element-name">
          {element.name}
        </div>
        <TrashButton onClick={() => this.props.deleteQuestion({ id: element.id })} />
        <CheckBox id={element.id} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Question);
