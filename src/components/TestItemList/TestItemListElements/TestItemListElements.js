import React from 'react';
import PropTypes from 'prop-types';

import './TestItemListElements.css';

const TestItemListElements = ({ elements, listName, className, message, type }) => {
  const list = elements.map((element) => {
    const oneOf = element.status ? 'current' : 'wrong';
    const color = type ? '' : oneOf;
    return (
      <div key={element.name} className={className}>
        <div className="element-body">
          <div className={`element-name ${color}`}>{element.name}</div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
          <input id={`${listName}${element.id}`} className="custom-checkbox" type="checkbox" />
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

TestItemListElements.defaultProps = {
  listName: '',
  type: '',
  elements: [],
  message: 'List is empty.',
  className: 'list-group-item list-group-item-action',
};

TestItemListElements.propTypes = {
  listName: PropTypes.string,
  type: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string,
  className: PropTypes.string,
};

export default TestItemListElements;
