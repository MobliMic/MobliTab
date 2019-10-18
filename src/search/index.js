import React from 'react';

export const SearchView = () => {
  const [search, setSearch] = React.useState({});
  // todo make this search work intuitivly e.g. search and hit enter
  return (
    <React.Fragment>
      <label for='search'>
        Search
      </label>
      <input
        name="search"
        placeholder="Enter Search"
        onChange={ (e) => {
          setSearch(e.target.value);
        } }
      />
      <a href={ `https://duckduckgo.com/?q=${ search }` }>Search</a>
    </React.Fragment>
  );
};