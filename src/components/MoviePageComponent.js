import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// How make two or more requests??
function MoviePageComponent() {
  const { resultId } = useParams();
  const [description, setDescription] = useState({});

  useEffect(() => {
    const detailsResponse = async () => {
      const response = await getDetails(resultId);
      setDescription(response);
    };
    if (resultId) {
      detailsResponse();
    } else {
      setDescription({});
    }
  }, []);

  let plot = null;
  let rated = null;
  const { plotSummary } = description;
  const { certificates } = description;
  console.log('desc', plotSummary);
  if (plotSummary) {
    plot = plotSummary;
  }

  if (certificates) {
    rated = certificates.US[0];
  }
  return (
    <div className="page-container">
      <h2 style={{ color: '#fafafa', marginBottom: 8 }}>
        {description?.title?.title}
      </h2>
      <p style={{ color: '#fafafa' }}>
        <span className="badge margin-right-2">
          {description?.title?.titleType}
        </span>
        <span className="badge margin-right-2">{description?.title?.year}</span>
        {rated?.certificates ? (
          <span className="badge margin-right-2">{rated?.certificate}</span>
        ) : (
          ''
        )}
      </p>
      <div className="cover-container">
        <img className="cover" src={description?.title?.image?.url} />
        <article className="cover-texts">
          <h3>Description</h3>
          <p>{plot?.text ? plot?.text : 'No description'}</p>
          <hr />
          <section className="genres">
            <h4>Genres</h4>
            {description?.genres?.map((genre) => (
              <span className="badge">{genre}</span>
            ))}
          </section>
        </article>
      </div>
    </div>
  );
}

async function getDetails(titleId) {
  const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
    params: { tconst: titleId },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    },
  };

  return (await axios.request(options)).data;
}

export default MoviePageComponent;
