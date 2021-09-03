import React, { useEffect, useState } from 'react';
import SearchBoxComponent from './SearchBoxComponent';
import PosterComponent from './PosterComponent';
import { getMovieList } from '../services/IMDBService';

function ContainerComponent() {
  const [queries, setQueries] = useState('');
  const [results, setResults] = useState([]);
  const noData = <h2 className="no-data">Search to get the movies</h2>;
  let movies = [];

  SearchEffect(queries, setResults);
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

function SearchEffect(search, setSearch) {
  useEffect(() => {
    let time = null;
    const getMovies = async () => {
      const response = await getMovieList(search);
      setSearch(response?.d ?? []);
    };

    if (search) {
      time = setTimeout(() => getMovies(), 500);
    } else {
      setSearch([]);
    }

    return () => {
      if (time) {
        clearTimeout(time);
      }
    };
  }, [search, setSearch]);
}

export default ContainerComponent;
