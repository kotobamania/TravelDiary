import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import CardData from './CardData';

const SearchPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const term = new URLSearchParams(location.search).get('term');
    if (term) {
      setSearchTerm(term);
      const results = CardData.filter((card) =>
        `${card.title} ${card.article}`.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [location.search]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className='searchPage'>
      <section>
        <span onClick={goBack} className='goback'>
          &lt; Go Back
        </span>
      </section>
      <SearchForm onSearch={(term) => setSearchTerm(term)} />
      <section>
        {searchTerm && <p>Search results for: {searchTerm}</p>}
      </section>
      <section>
        <SearchResults results={searchResults} />
        {searchTerm && searchResults.length === 0 && <p className='noResult'>No result</p>}
      </section>
      </div>
    </>
  );
};

export default SearchPage;
