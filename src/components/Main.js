import React, { useState } from 'react';
import Hero from './Hero';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import CardData from './CardData';
import SearchForm from './SearchForm';
import SearchPage from './SearchPage';
import About from './About';

const Main = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = CardData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedFilteredCards = filteredCards.sort((a, b) => b.id - a.id);
  const cards = sortedFilteredCards.map((item) => (
    <Card
      key={item.id}
      img={item.cardImg}
      viewCnt={item.stats.viewCnt}
      commentCnt={item.stats.commentCnt}
      title={item.title}
      place={item.place}
      author={item.author}
      id={item.id}
    />
  ));

  return (
    <>
      <Hero />
      <main>
        <SearchForm onSearch={(term) => setSearchTerm(term)} />
        <Carousel
          swipeable={true}
          responsive={responsive}
          infinite={true}
          ssr={true}
          containerClass="carousel-container"
          showDots={false}
          centerMode={true}
        >
          {searchTerm ? (<SearchPage />) : (filteredCards.map((item) => (
              cards
            ))
          )}
        </Carousel>
        <About />
      </main>
    </>
  );
};

export default Main;
