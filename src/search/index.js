import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  min-width: 32rem;
  height: auto;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
`;
const SearchLabel = styled.label``;

const SearchLink = styled.a`
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  color: #FFFFFF;
  background-color: #cc11ff;
  margin-left: 1rem;
`;

export const SearchView = () => {
  const [search, setSearch] = React.useState({});
  // todo make this search work intuitivly e.g. search and hit enter
  return (
    <div className='container'>
      <SearchWrapper>
        <SearchLabel htmlFor='search'>
          Search
        </SearchLabel>
        <SearchInput
          name="search"
          placeholder="Enter Search"
          onChange={ (e) => {
            setSearch(e.target.value);
          } }
        />
        <SearchLink href={ `https://duckduckgo.com/?q=${ search }` }>Search</SearchLink>
      </SearchWrapper>
    </div>
  );
};