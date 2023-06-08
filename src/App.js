import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar/SearchBar';
import DishInfo from './DishInfo/DishInfo';
import DishIngredients from './DishIngredients/DishIngredients';

import { dishOptions, dishInfo } from './utils/dummyData';

import './App.css';

function App() {
  const [activeDish, setActiveDish] = useState(dishOptions[0]);
  const [activeDishInfo, setActiveDishInfo] = useState(dishInfo[0]);

  const handleDishChange = (dish) => {
    setActiveDish(dish);
  };

  useEffect(() =>
    setActiveDishInfo(dishInfo.filter(item => item?.name === activeDish)[0]), [activeDish]
  );

  return (
    <div className="app">
      <SearchBar
        onDishChange={handleDishChange}
        dishOptions={dishOptions}
      />

      <DishInfo activeDishInfo={activeDishInfo} />

      <DishIngredients activeDishInfo={activeDishInfo} />
    </div>
  );
}

export default App;
