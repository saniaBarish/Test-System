import React from 'react';
import PropTypes from 'prop-types';

import './ModalChange.css';

import Button from '../Button';
import TextArea from '../TextArea';

const ModalCange = ({ title, yesBtnText,
  noBtnText, yesBtnClassName, noBtnClassName, visible,
  onClickYesBtn, onClickNoBtn, defaultValue, modalRef,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="ModalChange">
      <div className="bd-example bd-example-modal">
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onClickNoBtn}
                >
                  <span aria-hidden="true">X</span>
                </button>
              </div>
              <div className="modal-body">
                <TextArea
                  defaultValue={defaultValue}
                  textAreaRef={modalRef}
                />
              </div>
              <div className="modal-footer">
                <Button
                  className={noBtnClassName}
                  value={noBtnText}
                  onClick={onClickNoBtn}
                />
                <Button
                  className={yesBtnClassName}
                  value={yesBtnText}
                  onClick={onClickYesBtn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalCange.defaultProps = {
  title: 'Delete "data"',
  yesBtnText: 'Delete',
  noBtnText: 'Canсel',
  yesBtnClassName: 'btn btn-danger',
  noBtnClassName: 'btn btn-secondary',
  visible: false,
  defaultValue: '',
  modalRef: () => {},
};

ModalCange.propTypes = {
  title: PropTypes.string,
  yesBtnText: PropTypes.string,
  noBtnText: PropTypes.string,
  yesBtnClassName: PropTypes.string,
  noBtnClassName: PropTypes.string,
  visible: PropTypes.bool,
  defaultValue: PropTypes.string,
  modalRef: PropTypes.func,
  onClickNoBtn: PropTypes.func.isRequired,
  onClickYesBtn: PropTypes.func.isRequired,
};

export default ModalCange;
