import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Answer.css';

import { ANSWERS, STATUS } from '../../helppers/constants';
import { deleteOneElement, changeElement } from '../../reducers/questionReducer';

import ModalDelete from '../ModalDelete';
import OpenAnswer from './OpenAnswer';

const mapDispatchToProps = (dispatch) => ({
  deleteAnswer: (id) => dispatch(deleteOneElement({ type: ANSWERS, id })),
  changeAnswerStatus: (id, value) => dispatch(
    changeElement({ type: ANSWERS, name: STATUS, id, value }),
  ),
});

class Answer extends Component {
  static defaultProps = {
    element: {
      id: 'answer_',
      name: 'No answer added...',
      type: 'answer',
      status: false,
      checked: false,
    },
  }

  static propTypes = {
    element: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.bool,
      checked: PropTypes.bool,
    }),
    deleteAnswer: PropTypes.func.isRequired,
    changeAnswerStatus: PropTypes.func.isRequired,
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

  onDeleteAnswer = (id) => {
    this.props.deleteAnswer(id);
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
    const { modalVisible } = this.state;
    const listStyle = {
      backgroundColor: element.status ? '#23be3d36' : '#bd010136',
    };
    return (
      <div className="answer">
        <div className="list-group-item list-group-item-action" style={listStyle}>
          <div className="element-body">
            <OpenAnswer
              id={element.id}
              name={element.name}
              status={element.status}
              serialNumber={serialNumber}
              onClickTrashBtn={this.onClickTrashBtn}
              changeAnswerStatus={() => this.props.changeAnswerStatus(element.id, !element.status)}
            />
          </div>
        </div>
        <div className="modal-area">
          <ModalDelete
            title={`Delete answer №${serialNumber}`}
            bodyText={`Are you sure you want to delete this answer: "${element.name}"`}
            visible={modalVisible}
            onClickNoBtn={this.onClickModalNo}
            onClickYesBtn={() => this.onDeleteAnswer(element.id)}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Answer);
