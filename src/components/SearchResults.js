import React from 'react';
import Card from './Card';

const SearchResults = ({ results }) => {
  const sortedResults = results.sort((a, b) => b.id - a.id);

  return (
    <>
      <div className="search-results resultCard">

      {sortedResults.map((result) => (
          <Card
           key={result.id}
            img={result.cardImg}
            viewCnt={result.stats.viewCnt}
            commentCnt={result.stats.commentCnt}
            title={result.title}
            place={result.place}
            author={result.author}
            id={result.id}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResults;