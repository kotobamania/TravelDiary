import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [validationError, setValidationError] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
            onSearch(searchTerm);
            navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
        } else {
        setValidationError('*please enter your search term.');
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setValidationError('');
    };

    return (
        <>
            <section>
                <form onSubmit={(e) => handleSearch(e)}>
                    <input
                        type="text"
                        placeholder="Search by keyword"
                        value={searchTerm}
                        onChange={(e) => handleInputChange(e)}
                        id="searchBox"
                        minLength={1}
                    />
                    <button type="submit">
                        Search
                    </button>
                    {validationError && <div className='validation'>{validationError}</div>}
                </form>
            </section>
        </>
    );
};

export default SearchForm;
