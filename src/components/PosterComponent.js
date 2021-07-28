import React from 'react';

function PosterComponent(props): React$Element<'div'> {
  const poster = props.results;
  return (
    <div className="poster-card">
      <div className="poster-image">
        <img src={poster.i.imageUrl} alt={poster.l} className="image-full" />
      </div>
      <p className="poster-label">{poster.l}</p>
    </div>
  );
}

export default PosterComponent;
