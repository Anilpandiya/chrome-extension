import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchBar from './SearchBar/SearchBar';
import DishInfo from './DishInfo/DishInfo';
import DishIngredients from './DishIngredients/DishIngredients';

// import { dishOptions, dishInfo } from './utils/dummyData';

import './App.css';

import { API_BASE_URL, getRecipeById } from './utils/apiHelper';
import AddRecipeForm from './AddRecipeForm/AddRecipeForm';

function App() {
  const [activeDish, setActiveDish] = useState('');
  const [activeDishInfo, setActiveDishInfo] = useState({});

  const [allDishes, setAllDishes] = useState([]);

  const handleDishChange = async (dish) => {
    setActiveDish(dish);

    try {
      const dishIndex = allDishes.map(item => item?.name).findIndex(name => name === dish);

      const recipe = await getRecipeById(dishIndex);
      activeDish && setActiveDishInfo(recipe);
    } catch (error) {
      // Handle error
      console.error('Error fetching recipe details:', error);
    }
  };

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      const recipes = response?.data?.message;
      if (recipes.length > 0) {
        setActiveDish(recipes[2].name);
        setActiveDishInfo(recipes[2]);
        setAllDishes(recipes);
      }
    } catch (error) {
      // Handle error
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/add-recipe" element={<AddRecipeForm updateDishes={fetchRecipes} />} />

          <Route path="/" element={<>
            <SearchBar
              onDishChange={handleDishChange}
              dishOptions={allDishes.map((item) => item.name)}
            />

            <DishInfo activeDishInfo={activeDishInfo} />

            <DishIngredients activeDishInfo={activeDishInfo} />
          </>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
