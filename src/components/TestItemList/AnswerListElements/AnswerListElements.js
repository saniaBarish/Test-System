import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './AnswerListElements.css';

import {
  answersSelector,
  deleteAnswer,
  changeAnswerStatus,

} from '../../../reducers/questionReducer';

import CheckBox from '../../CheckBox';
import TrashButton from '../../TrashButton';
import StatusButton from '../../StatusButton';

const mapStateToProps = (state) => ({ elements: answersSelector(state) });

const mapDispatchToProps = (dispatch) => ({
  actions: {
    deleteAnswer: (payload) => dispatch(deleteAnswer(payload)),
    changeAnswerStatus: (payload) => dispatch(changeAnswerStatus(payload)),
  },
});

const AnswerListElements = ({ elements, className, message, actions }) => {
  const list = elements.map((element) => {
    return (
      <div key={element.name} className={className}>
        <div className="element-body">
          <div className="element-name">
            {element.name}
          </div>
          <StatusButton
            status={element.status}
            onClick={() => actions.changeAnswerStatus({ id: element.id, status: !element.status })}
          />
          <TrashButton onClick={() => actions.deleteAnswer({ id: element.id })} />
          <CheckBox id={element.id} />
        </div>
      </div>
    );
  });

  if (elements.length === 0) {
    return (
      <div className="elements">
        <div key={message} className={className}>
          <div className="element-body">
            <div className="element-name">{message}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="elements">
      {list}
    </div>
  );
};

AnswerListElements.defaultProps = {
  elements: [],
  message: 'No answers added...',
  className: 'list-group-item list-group-item-action',
};

AnswerListElements.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string,
  className: PropTypes.string,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnswerListElements);
