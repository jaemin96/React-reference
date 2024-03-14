import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Increase, Decrease } from './redux/modules/counter';
import { RootState } from './redux/modules/index';

const App = () => {
  const dispatch = useDispatch();
  const { num } = useSelector((state: RootState) => state.counter);

  return (
    <>
      <div className="App">
        <h1>Hello, world!</h1>
        <span>hello</span>
      </div>
      <hr />
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
      </div>
    </>
  );
};

export default App;
