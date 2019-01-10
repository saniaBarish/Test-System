import React from 'react';
import PropTypes from 'prop-types';

import './ModalDelete.css';

import Button from '../Button';

const ModalDelete = ({ title, bodyText, yesBtnText,
  noBtnText, yesBtnClassName, noBtnClassName, visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="modal-delete">
      <div className="bd-example bd-example-modal">
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">X</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{bodyText}</p>
              </div>
              <div className="modal-footer">
                <Button className={noBtnClassName} value={noBtnText} />
                <Button className={yesBtnClassName} value={yesBtnText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalDelete.defaultProps = {
  title: 'Delete "data"',
  bodyText: 'Modal body text goes here.',
  yesBtnText: 'Delete',
  noBtnText: 'Canсel',
  yesBtnClassName: 'btn btn-danger',
  noBtnClassName: 'btn btn-secondary',
  visible: false,
};

ModalDelete.propTypes = {
  title: PropTypes.string,
  bodyText: PropTypes.string,
  yesBtnText: PropTypes.string,
  noBtnText: PropTypes.string,
  yesBtnClassName: PropTypes.string,
  noBtnClassName: PropTypes.string,
  visible: PropTypes.bool,
};

export default ModalDelete;
