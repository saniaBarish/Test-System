import React from 'react';
import PropTypes from 'prop-types';

import './ListElements.css';

const ListElements = ({ elements, className, message, View }) => {
  const list = elements.map((element, i) => {
    return (
      <View element={element} key={element.id} serialNumber={i + 1} />
    );
  });

  if (elements.length === 0) {
    return (
      <div className="elements">
        <div className={className}>
          <div className="element-name">{message}</div>
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
