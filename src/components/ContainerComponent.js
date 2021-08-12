import React, { useEffect, useState } from 'react';
import SearchBoxComponent from './SearchBoxComponent';
import PosterComponent from './PosterComponent';
import { getMovieList } from '../services/IMDBService';

function ContainerComponent() {
  const [queries, setQueries] = useState('');
  const [results, setResults] = useState([]);
  const noData = <h2 className="no-data">Search to get the movies</h2>;
  let movies = [];
  useEffect(() => {
    let time = null;
    const getMovies = async () => {
      const response = await getMovieList(queries);
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

export default ContainerComponent;
