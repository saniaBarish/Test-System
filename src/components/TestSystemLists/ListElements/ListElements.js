import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ListElements.css';

import Button from '../../Button';
import ModalDelete from '../../ModalDelete';

class ListElements extends Component {
  static defaultProps = {
    elements: [],
    message: 'List is empty.',
    className: 'list-group-item list-group-item-action',
  }

  static propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object),
    message: PropTypes.string,
    className: PropTypes.string,
    View: PropTypes.func.isRequired,
    deleteAllElements: PropTypes.func.isRequired,
  }

  state = {
    modalVisible: false,
  }

  onClickClearList = () => {
    this.setState({
      modalVisible: true,
    });
  }

  onDeleteAllElements = () => {
    this.props.deleteAllElements();
    this.setState({
      modalVisible: false,
    });
  }

  onClickModalNo = () => {
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    const { elements, className, message, View } = this.props;
    const { modalVisible } = this.state;

    if (elements.length === 0) {
      return (
        <div className="elements">
          <div className={className}>
            <div className="element-name">{message}</div>
          </div>
        </div>
      );
    }

    const list = elements.map((element, i) => {
      return (
        <View element={element} key={element.id} serialNumber={i + 1} />
      );
    });

    return (
      <div className="elements">
        {list}
        <Button
          className="btn btn-outline-danger"
          value="Clear List"
          onClick={this.onClickClearList}
        />
        <ModalDelete
          visible={modalVisible}
          onClickNoBtn={this.onClickModalNo}
          onClickYesBtn={this.onDeleteAllElements}
          title={`Delete all ${elements[0].type}s.`}
          bodyText={`Are you sure you want to delete all ${elements[0].type}s?`}
        />
      </div>
    );
  }
}

export default ListElements;
