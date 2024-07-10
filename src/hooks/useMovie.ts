import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../apis';

const useMovie = () => {
  return useQuery({ queryKey: ['popularMovies'], queryFn: getPopularMovies })
}

export default useMovie;