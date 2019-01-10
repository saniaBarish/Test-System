import React from 'react';
import PropTypes from 'prop-types';

import './ListElements.css';

const ListElements = ({ elements, className, message, View }) => {
  const list = elements.map((element) => {
    return (
      <div key={element.name} className={className}>
        <View element={element} />
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

ListElements.defaultProps = {
  elements: [],
  message: 'No answers added...',
  className: 'list-group-item list-group-item-action',
};

ListElements.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string,
  className: PropTypes.string,
  View: PropTypes.func.isRequired,
};

export default ListElements;
