import React, { useState } from 'react';

import './Search.css';

const SearchBar = ({ onDishChange, dishOptions }) => {
  const [searchText, setSearchText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(dishOptions);

  const handleDishSelection = (dish) => {
    console.log('search dish', dish)
    onDishChange(dish);
    setSearchText(dish);
    setShowDropdown(false);
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setSearchText(value);
    let filteredOptions;

    // Filter the dish options based on the search text
    if (value === '') {
      filteredOptions = [...dishOptions]; // Show all dishes if no search text
    } else {
      filteredOptions = dishOptions.filter((dish) =>
        dish.toLowerCase().includes(value.toLowerCase())
      );
    }

    setFilteredOptions(filteredOptions);

    // Show the dropdown only if there are filtered options
    setShowDropdown(filteredOptions.length > 0);
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <img src={`/static/images/vector.png`} className="search-icon" />
        <input
          type="text"
          className='search-input'
          value={searchText}
          onChange={handleSearchChange}
          onFocus={() => setShowDropdown(filteredOptions.length > 0)}
          // onBlur={() => setShowDropdown(false)}
          placeholder="Search cousine"
        />
      </div>

      {showDropdown && (
        <div className="dish-dropdown">
          {filteredOptions.map((dish, index) => (
            <button
              key={index}
              className={`dish-option ${searchText === dish ? 'active' : ''}`}
              onClick={() => handleDishSelection(dish)}
            >
              {dish}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
