import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term, results) => {
    setSearchTerm(term);
    setSearchResults(results);
  };

  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route
            path="/*"
            element={<Main searchTerm={searchTerm} onSearch={handleSearch} />}
          />
          <Route
            path="/search"
            element={<SearchPage searchTerm={searchTerm} results={searchResults} />}
          />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;

