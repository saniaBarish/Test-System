import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = ({ elements, className, label, message }) => {
  const list = elements.map((element) => {
    if ((typeof element) === 'string') {
      return <li key={element} className={className}>{element}</li>;
    }
    if ((typeof element) === 'object') {
      return <li key={element.id} className={className}>{element.value}</li>;
    }
    return null;
  });
  const haveMessage = message ? <li className={className} key={message}>{message}</li> : null;
  return (
    <div className="item-list">
      <h2 className="header">{label}</h2>
      <ul className="list-group">
        {list.length === 0 ? haveMessage : list}
      </ul>
    </div>
  );
};

ItemList.defaultProps = {
  elements: [],
  className: 'list-group-item list-group-item-action',
  label: '',
  message: '',
};

ItemList.propTypes = {
  elements: PropTypes.array,
  className: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
};

export default ItemList;
