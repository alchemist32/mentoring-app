import React from 'react';

import { Link } from 'react-router-dom';

function PosterComponent(props): React$Element<'div'> {
  const poster = props.results;
  return (
    <div className="poster-card">
      <div className="poster-image">
        <img src={poster?.i?.imageUrl} alt={poster?.l} className="image-full" />
      </div>
      <p className="poster-label">
        <Link to={`/movie/${poster.id}`}>{poster?.l}</Link>
      </p>
    </div>
  );
}

export default PosterComponent;
