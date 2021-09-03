import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/IMDBService';
import LoadingComponent from '../components/LoadingComponent';

// How make two or more requests??
function MoviePageComponent() {
  const { resultId } = useParams();
  const [description, setDescription] = useState({});

  MoviePageEffect(resultId, setDescription);

  let template = null;
  if (description.title) {
    template = (
      <MovieTemplate movieDescription={mappingMovieDescription(description)} />
    );
  } else {
    template = <LoadingComponent />;
  }
  return template;
}

function mappingMovieDescription(movieDescription) {
  return {
    title: movieDescription?.title?.title,
    type: movieDescription?.title?.titleType,
    year: movieDescription?.title?.year,
    certificate: movieDescription?.certificates?.US[0]?.certificate,
    cover: movieDescription?.title?.image?.url,
    plot: movieDescription?.plotSummary?.text,
    genres: movieDescription?.genres,
  };
}

function MovieTemplate({ movieDescription }) {
  console.log(movieDescription);
  return (
    <div className="page-container">
      <h2 style={{ color: '#fafafa', marginBottom: 8 }}>
        {movieDescription?.title}
      </h2>
      <p style={{ color: '#fafafa' }}>
        <span className="badge margin-right-2">{movieDescription?.type}</span>
        <span className="badge margin-right-2">{movieDescription?.year}</span>
        {movieDescription?.certificate ? (
          <span className="badge margin-right-2">
            {movieDescription?.certificate}
          </span>
        ) : (
          ''
        )}
      </p>
      <div className="cover-container">
        <img
          className="cover"
          src={movieDescription?.cover}
          alt="cover image"
        />
        <article className="cover-texts">
          <h3>Description</h3>
          <p>
            {movieDescription?.plot ? movieDescription?.plot : 'No description'}
          </p>
          <hr />
          <section className="genres">
            <h4>Genres</h4>
            {movieDescription?.genres?.map((genre, idx) => (
              <span className="badge" key={idx}>
                {genre}
              </span>
            ))}
          </section>
        </article>
      </div>
    </div>
  );
}

function MoviePageEffect(
  movieId: string,
  setMovies: React.Dispatch<React.SetStateAction<{}>>
) {
  useEffect(() => {
    const detailsResponse = async () => {
      const response = await getMovieDetails(movieId);
      setMovies(response);
    };
    if (movieId) {
      detailsResponse();
    } else {
      setMovies({});
    }
  }, [movieId, setMovies]);
}

export default MoviePageComponent;
