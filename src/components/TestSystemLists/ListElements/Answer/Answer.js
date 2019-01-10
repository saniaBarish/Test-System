import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  }

  state = {
    modalVisible: false,
  }

  render() {
    const { element } = this.props;
    const { modalVisible } = this.state;
    return (
      <div className="element-body">
        <div className="element-name">
          {element.name}
          <ModalDelete visible={modalVisible} />
        </div>
        <StatusButton
          status={element.status}
          onClick={() => this.props.changeAnswerStatus({ id: element.id, status: !element.status })}
        />
        <TrashButton onClick={() => this.props.deleteAnswer({ id: element.id })} />
        <CheckBox id={element.id} />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Answer);
