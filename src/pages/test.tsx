import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { RootState } from '../redux/modules';
import { QuestionForm } from '../components';
import { Increase, Decrease } from '../redux/modules/counter';
import Card from '../components/Card/Card';

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
        <Card
          title={'소금입법'}
          subtitle={'박탈당했어'}
          description={
            '모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다. 국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.'
          }
          url={'#'}
          alt={'소금입법'}
        />
      </div>
    </div>
  );
};

export default TestPage;
