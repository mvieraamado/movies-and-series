import axios from 'axios';

export const getMoviesByTitle = (expression)=> {
  const apiKey = 'k_48k2bmg0';
  return axios.get(`https://imdb-api.com/API/Search/${apiKey}/${expression}`);
}