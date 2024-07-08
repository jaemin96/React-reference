'use server';

import { ServerConfig } from './config';
const { TMDB_API_KEY } = ServerConfig;

const TMDB_API_URI = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY || ""}`;

const getPopularMovies = async () => {
    try {
      const response = await fetch(TMDB_API_URI);
      const data = await response.json();
      return data; 
    }catch(error) {
        console.error(error);
    };
};

export { getPopularMovies };

