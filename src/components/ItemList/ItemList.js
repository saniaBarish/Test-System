import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = ({ elements, className, lable }) => {
  const list = elements.map((element) => {
    if ((typeof element) === 'string') {
      return <li key={element} className={className}>{element}</li>;
    }
    if ((typeof element) === 'object') {
      return <li key={element.id} className={className}>{element.value}</li>;
    }
    return null;
  });
  if (list.length === 0) {
    return null;
  }
  return (
    <div>
      <h2 className="item-list-header">{lable}</h2>
      <ul className="list-group">
        {list}
      </ul>
    </div>
  );
};

ItemList.defaultProps = {
  elements: [],
  className: 'list-group-item list-group-item-action',
  lable: '',
};

ItemList.propTypes = {
  elements: PropTypes.array,
  className: PropTypes.string,
  lable: PropTypes.string,
};

export default ItemList;
