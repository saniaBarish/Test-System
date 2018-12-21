import React from 'react';
import Input from '../Input';

import './FormGroupInput.css';

const FormGroupInput = (props) => {
  return (
    <div className="form-group">
      <Input {...props} />
    </div>
  );
};

export default FormGroupInput;
