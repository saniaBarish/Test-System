import React from 'react';
import PropTypes from 'prop-types';

import './QuestionListElements.css';

const QuestionListElements = ({ elements, className }) => {
  const list = elements.map((element) => {
    return (
      <div key={element.id} className={className}>
        <div className="element-body">
          <div className="element-name">{element.name}</div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="elements">
      {list}
    </div>
  );
};

QuestionListElements.defaultProps = {
  elements: [
    { id: '1', name: 'No questions created.' },
    { id: '2', name: 'Add your first question.' },
  ],
  className: 'list-group-item list-group-item-action',
};

QuestionListElements.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  className: PropTypes.string,
};

export default QuestionListElements;
