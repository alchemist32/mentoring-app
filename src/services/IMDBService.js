import axios, { AxiosRequestConfig } from 'axios';

export function setRequestOptions(
  endpointURL: string,
  paramsName: string,
  paramValue: string
) {
  return {
    method: 'GET',
    url: `https://imdb8.p.rapidapi.com/${endpointURL}`,
    params: { [paramsName]: paramValue },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    },
  };
}

async function getMovieListResponse(requestOptions: AxiosRequestConfig) {
  return (await axios.request(requestOptions)).data;
}

export async function getMovieList(query: string) {
  const options = setRequestOptions('auto-complete', 'q', query);
  return await getMovieListResponse(options);
}

async function getMovieDetailsResponse(requestOptions: AxiosRequestConfig) {
  return (await axios.request(requestOptions)).data;
}

export async function getMovieDetails(movieId: string) {
  const options = setRequestOptions(
    'title/get-overview-details',
    'tconst',
    movieId
  );
  return await getMovieDetailsResponse(options);
}
