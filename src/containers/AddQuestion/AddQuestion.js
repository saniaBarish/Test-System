import React from 'react';

import './AddQuestion.css';

import Input from '../../components/Input';
import Button from '../../components/Button';
import TestItemList from '../../components/TestItemList';

const AddQuestion = () => {
  return (
    <div className="add-question">
      <h2>Create Question</h2>
      <Input placeholder="Enter question" />
      <Button value="Add question" />
      <TestItemList listName="Answer" />
      <Input placeholder="Enter answer" type="textbox" />
      <Button value="Add answer" />
    </div>
  );
};

export default AddQuestion;
