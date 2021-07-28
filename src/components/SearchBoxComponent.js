import React from 'react';

function SearchBoxComponent(props): React$Element<'div'> {
  return (
    <div>
      <input
        className="search-box"
        placeholder="Type to search"
        onChange={(evt) => props.change(evt.currentTarget.value)}
      />
    </div>
  );
}

export default SearchBoxComponent;
