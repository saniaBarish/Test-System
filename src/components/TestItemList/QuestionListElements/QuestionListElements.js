import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './QuestionListElements.css';

import {
  questionsSelector,
  deleteQuestion,
} from '../../../reducers/questionReducer';

import CheckBox from '../../CheckBox';
import TrashButton from '../../TrashButton';

const mapStateToProps = (state) => ({ elements: questionsSelector(state) });
const mapDispatchToProps = (dispatch) => ({
  actions: {
    deleteQuestion: (payload) => dispatch(deleteQuestion(payload)),
  },
});

const QuestionListElements = ({ elements, className, message, actions }) => {
  const list = elements.map((element) => {
    return (
      <div key={element.name} className={className}>
        <div className="element-body">
          <div className="element-name">
            {element.name}
          </div>
          <TrashButton onClick={() => actions.deleteQuestion({ id: element.id })} />
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

QuestionListElements.defaultProps = {
  elements: [],
  message: 'No question added...',
  className: 'list-group-item list-group-item-action',
};

QuestionListElements.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string,
  className: PropTypes.string,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionListElements);
