'use server';

import { ServerConfig } from './config';
const { TMDB_API_KEY } = ServerConfig;

const TMDB_API_URI = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY || ""}`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

const getPopularMovies = async () => {
    try {
      const data = await fetch(TMDB_API_URI, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));

        return data;
    }catch(error) {
        console.error(error);
    };
};

export { getPopularMovies };

