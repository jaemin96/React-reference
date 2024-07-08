import { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { RootState } from '../redux/modules';
import { QuestionForm, Spinner } from '../components';
import { Increase, Decrease } from '../redux/modules/counter';

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { getPopularMovies } from '../server';

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <MockUp />
      </QueryClientProvider>
    </div>
  );
};

export default TestPage;


// mock-up date test
const MockUp = () => {
  const [movies, setMovies] = useState();
  const { isLoading, isError, data } = useQuery({ queryKey: ['popularMovies'], queryFn: getPopularMovies });

  useEffect(() => {
    if(data) {
      setMovies(data);
    }
  }, [data]);

  const handleMovies = () => {
    console.log({movies});
  }

  if(isError) {
    return <>Error!</>
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Button onClick={handleMovies}>
        인기 영화 확인하기
      </Button>
    </>
  )
}