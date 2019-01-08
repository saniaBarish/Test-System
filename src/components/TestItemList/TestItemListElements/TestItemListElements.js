import React from 'react';
import PropTypes from 'prop-types';

import './TestItemListElements.css';

const TestItemListElements = ({ elements, listName, className }) => {
  const list = elements.map((element) => {
    return (
      <div key={element.name} className={className}>
        <div className="element-body">
          <div className="element-name">{element.name}</div>
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
  return (
    <div className="elements">
      {list}
    </div>
  );
};

TestItemListElements.defaultProps = {
  listName: '',
  elements: [
    {
      id: '1',
      name: 'List is empty',
    },
  ],
  className: 'list-group-item list-group-item-action',
};

TestItemListElements.propTypes = {
  listName: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  className: PropTypes.string,
};

export default TestItemListElements;
