import React, { useEffect, useState } from 'react';
import SearchBoxComponent from './SearchBoxComponent';
import PosterComponent from './PosterComponent';
import axios from 'axios';

function ContainerComponent() {
  const [queries, setQueries] = useState('');
  const [results, setResults] = useState([]);
  const noData = <h2 className="no-data">Search to get the movies</h2>;
  let movies = [];
  useEffect(() => {
    let time = null;
    const getMovies = async () => {
      const response = await retrieveReuslts(queries);
      setResults(response?.d ?? []);
    };

    if (queries) {
      time = setTimeout(() => getMovies(), 500);
    } else {
      setResults([]);
    }

    return () => {
      if (time) {
        clearTimeout(time);
      }
    };
  }, [queries]);

  movies = results.map((result, i) => (
    <PosterComponent results={result} key={i} />
  ));
  return (
    <div className="container">
      <SearchBoxComponent change={setQueries} queries={queries} />
      <section className="poster-grid">
        {movies.length ? movies : noData}
      </section>
    </div>
  );
}

async function retrieveReuslts(query: string) {
  var options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: { q: query },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    },
  };
  if (query) {
    try {
      return (await axios.request(options)).data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ContainerComponent;
