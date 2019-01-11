import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Answer.css';

import { deleteAnswer, changeAnswerStatus } from '../../../../reducers/questionReducer';

import ModalDelete from '../../../ModalDelete';
import StatusButton from '../../../StatusButton';
import TrashButton from '../../../TrashButton';
import CheckBox from '../../../CheckBox';

const mapDispatchToProps = (dispatch) => ({
  deleteAnswer: (payload) => dispatch(deleteAnswer(payload)),
  changeAnswerStatus: (payload) => dispatch(changeAnswerStatus(payload)),
});

class Answer extends Component {
  static defaultProps = {
    element: {
      id: 'answer_',
      name: 'No answer added...',
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
    this.props.deleteAnswer({ id });
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
            <div className="element-name">
              <CheckBox id={element.id} />
              {`${serialNumber}) ${element.name}`}
            </div>
            <div className="btn-answer">
              <StatusButton
                status={element.status}
                onClick={() => this.props.changeAnswerStatus({
                  id: element.id,
                  status: !element.status,
                })}
                className="btn btn"
              />
              <TrashButton onClick={this.onClickTrashBtn} />
            </div>
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
