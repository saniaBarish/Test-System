import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Question.css';

import { deleteQuestion } from '../../../../reducers/questionReducer';

import TrashButton from '../../../TrashButton';
import CheckBox from '../../../CheckBox';
import ModalDelete from '../../../ModalDelete';

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
        type: 'question',
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
    serialNumber: PropTypes.number.isRequired,
  }

  state = {
    modalVisible: false,
  }

  onClickTrashBtn = () => {
    this.setState({
      modalVisible: true,
    });
  }

  onDeleteQuestion = (id) => {
    this.props.deleteQuestion({ id });
    this.setState({
      modalVisible: false,
    });
  }

  onClickModalNo = () => {
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    const { element, serialNumber } = this.props;
    return (
      <div className="question">
        <div className="list-group-item list-group-item-action">
          <div className="question-body">
            <CheckBox id={element.id} />
            <div className="question-btn">
              <TrashButton onClick={this.onClickTrashBtn} />
            </div>
            <div className="question-name">
              {`${serialNumber}) ${element.name}`}
            </div>
          </div>
        </div>
        <ModalDelete
          visible={this.state.modalVisible}
          onClickYesBtn={() => this.onDeleteQuestion(element.id)}
          onClickNoBtn={this.onClickModalNo}
          bodyText={`Are you sure you want to delete this question: "${element.name}"`}
          title={`Delete question №${serialNumber}`}
        />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Question);
