import React from 'react';
import PropTypes from 'prop-types';

import './OpenAnswer.css';

import StatusButton from '../StatusButton';
import TrashButton from '../TrashButton';
import Button from '../Button';
import CheckBox from '../CheckBox';

const OpenAnswer = ({ id, name, status, serialNumber,
  onClickTrashBtn, changeAnswerStatus, onClickChangeBtn, onClickCheckBox }) => {
  return (
    <div className="open-answer">
      <CheckBox
        id={id}
        onClick={onClickCheckBox}
      />
      <div className="btn-answer">
        <StatusButton
          status={status}
          onClick={() => changeAnswerStatus({
            id,
            status: !status,
          })}
          className="btn btn"
        />
        <TrashButton onClick={onClickTrashBtn} />
      </div>
      <div className="element-name">
        {`${serialNumber}) ${name}`}
        <Button
          className="btn btn-info"
          value="Edit"
          onClick={onClickChangeBtn}
        />
      </div>
    </div>
  );
};

OpenAnswer.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
  serialNumber: PropTypes.number,
  onClickCheckBox: PropTypes.func.isRequired,
  onClickTrashBtn: PropTypes.func.isRequired,
  changeAnswerStatus: PropTypes.func.isRequired,
  onClickChangeBtn: PropTypes.func.isRequired,
};

OpenAnswer.defaultProps = {
  id: 'answer_0',
  name: 'No answer added...',
  status: false,
  serialNumber: 1,
};

export default OpenAnswer;
