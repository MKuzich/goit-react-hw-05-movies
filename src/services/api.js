import axios from 'axios';

const API_KEY = '0d2fc6d2597c3f501e7437cf40d08b03';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const URL = `${BASE_URL}/trending/movie/day?${searchParams}`;
  try {
    const response = await axios.get(URL);
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const getRequestedMovies = async request => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: request,
  });
  const URL = `${BASE_URL}/search/movie?${searchParams}`;
  try {
    const response = await axios.get(URL);
    return response.data.results;
  } catch (error) {
    return error;
  }
};

export const getMovieById = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const URL = `${BASE_URL}/movie/${id}?${searchParams}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error;
  }
};
