import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { RootState } from '../redux/modules';
import { QuestionForm, Spinner } from '../components';
import { Increase, Decrease } from '../redux/modules/counter';

const TestPage = (): ReactElement => {
  const dispatch = useDispatch();
  const { num } = useSelector((state: RootState) => state.counter);

  return (
    <div>
      <div>
        <h1>State management</h1>
        <span>current value : {num}</span>
      </div>
      <Button className="increase-btn" onClick={() => dispatch(Increase())}>
        +
      </Button>
      <Button className="decrease-btn" onClick={() => dispatch(Decrease())}>
        -
      </Button>
      <div>
        <QuestionForm />
      </div>
      <div>
        <Spinner />
      </div>
    </div>
  );
};

export default TestPage;
