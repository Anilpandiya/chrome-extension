import React, { useState } from 'react';
import SearchComponent from './SearchComponent';

import './App.css';

const dishOptions = ['Paella', 'Dish 1', 'Dish 2'];

function App() {
  const [activeDish, setActiveDish] = useState(dishOptions[0]);

  const handleDishChange = (dish) => {
    console.log('dish', dish)
    setActiveDish(dish);
  };

  return (
    <div className="app">
      <SearchComponent
        onDishChange={handleDishChange}
        dishOptions={dishOptions}
      />
      <p>Active Dish: {activeDish}</p>
    </div>
  );
}

export default App;
