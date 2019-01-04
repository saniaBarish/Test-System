import React from 'react';
import PropTypes from 'prop-types';

import './OpenQuestion.css';

import CheckBox from '../../CheckBox';
import TrashButton from '../../TrashButton';

const OpenQuestion = ({ id, name, serialNumber, onClickTrashBtn }) => {
  return (
    <div className="close-question">
      <CheckBox id={id} />
      <div className="close-question-btn">
        <TrashButton onClick={onClickTrashBtn} />
      </div>
      <div className="close-question-name">
        {`${serialNumber}) ${name}`}
      </div>
    </div>
  );
};

OpenQuestion.defaultProps = {
  id: 'question_1',
  name: 'No question',
  serialNumber: 1,
  onClickTrashBtn: () => {},
};

OpenQuestion.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  serialNumber: PropTypes.number,
  onClickTrashBtn: PropTypes.func,
};

export default OpenQuestion;
