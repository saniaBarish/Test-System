import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Answer.css';

import { ANSWERS, STATUS, NAME, CHECKED } from '../../helppers/constants';
import { deleteOneElement, changeElement } from '../../reducers/questionReducer';

import ModalDelete from '../../components/ModalDelete';
import OpenAnswer from '../../components/OpenAnswer';
import ModalChange from '../../components/ModalChange';

const mapDispatchToProps = (dispatch) => ({
  deleteAnswer: (id) => dispatch(deleteOneElement({ type: ANSWERS, id })),
  changeAnswerStatus: (id, value) => dispatch(
    changeElement({ type: ANSWERS, name: STATUS, id, value }),
  ),
  changeAnswerName: (id, value) => dispatch(
    changeElement({ type: ANSWERS, name: NAME, id, value }),
  ),
  changeAnswerChecked: (id, value) => dispatch(
    changeElement({ type: ANSWERS, name: CHECKED, id, value }),
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
    changeAnswerName: PropTypes.func.isRequired,
    changeAnswerChecked: PropTypes.func.isRequired,
    serialNumber: PropTypes.number.isRequired,
  }

  state = {
    delModalVisible: false,
    changeModalVisible: false,
  }

  openModal = (name) => {
    this.setState({
      [name]: true,
    });
  }

  closeModal = (name) => {
    this.setState({
      [name]: false,
    });
  }

  onDeleteAnswer = (id) => {
    this.props.deleteAnswer(id);
    this.setState({
      delModalVisible: false,
    });
  }

  onChangeAnswerName = (id, value) => {
    this.props.changeAnswerName(id, value);
    this.setState({
      changeModalVisible: false,
    });
  }

  render() {
    const { element, serialNumber } = this.props;
    const { delModalVisible, changeModalVisible } = this.state;
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
              onClickChangeBtn={() => this.openModal('changeModalVisible')}
              onClickTrashBtn={() => this.openModal('delModalVisible')}
              changeAnswerStatus={() => this.props.changeAnswerStatus(element.id, !element.status)}
              onClickCheckBox={({
                target: { checked },
              }) => this.props.changeAnswerChecked(element.id, checked)}
            />
          </div>
        </div>
        <div className="modal-area">
          <ModalDelete
            title={`Delete answer №${serialNumber}`}
            bodyText={`Are you sure you want to delete this answer: "${element.name}"`}
            visible={delModalVisible}
            onClickNoBtn={() => this.closeModal('delModalVisible')}
            onClickYesBtn={() => this.onDeleteAnswer(element.id)}
          />
          <ModalChange
            title={`Change answer №${serialNumber}`}
            visible={changeModalVisible}
            defaultValue={element.name}
            yesBtnText="Save"
            yesBtnClassName="btn btn-success"
            onClickNoBtn={() => this.closeModal('changeModalVisible')}
            modalRef={(node) => { this.textArea = node; }}
            onClickYesBtn={() => this.onChangeAnswerName(element.id, this.textArea.value)}
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
