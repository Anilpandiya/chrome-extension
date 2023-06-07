import React, { useEffect, useState } from 'react';
import { FaTwitter, FaTelegramPlane, FaMediumM, FaMailBulk } from 'react-icons/fa';

import SearchComponent from './SearchComponent';

import './App.css';

const dishOptions = ['Spanish Paella', 'Pizza', 'Sushi'];

const dishInfo = [
  {
    name: 'Spanish Paella',
    flag: 'spain',
    difficulty: 'Medium',
    description: 'Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area',
    recipeUrl: 'https://github.com/',
    seafood: 'Jumbo Shrimp',
    produce: 'Onion / Tomatoes',
    spices: 'Bay Leaf / Saffron',
    oliveOil: 'Spanish Olive Oil',
    volume: '700',
    serves: '4',
    authenticity: 'unverified',
    stock: 'chicken'
  },
  {
    name: 'Pizza',
    flag: 'italy',
    difficulty: 'Easy',
    description: 'Pizza is a savory dish of Italian origin, consisting of a round, flattened base of dough topped with various ingredients such as tomato sauce, cheese, and toppings like vegetables, meats, or seafood.',
    recipeUrl: 'https://github.com/',
    seafood: 'None',
    produce: 'Tomatoes / Basil',
    spices: 'Oregano / Garlic Powder',
    oliveOil: 'Extra Virgin Olive Oil',
    volume: '500',
    serves: '2-3',
    authenticity: 'authentic',
    stock: 'none'
  },
  {
    name: 'Sushi',
    flag: 'japan',
    difficulty: 'Hard',
    description: 'Sushi is a traditional Japanese dish consisting of vinegared rice accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits. It is often served with soy sauce, wasabi, and pickled ginger.',
    recipeUrl: 'https://github.com/',
    seafood: 'Fish / Shellfish',
    produce: 'Cucumber / Avocado',
    spices: 'Wasabi / Soy Sauce',
    oliveOil: 'None',
    volume: '600',
    serves: '3-4',
    authenticity: 'authentic',
    stock: 'none'
  }
]

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
      <SearchComponent
        onDishChange={handleDishChange}
        dishOptions={dishOptions}
      />
      <div className="dish-info">
        <img src={`/static/images/${activeDishInfo.flag}.png`} alt={activeDishInfo.flag} />
        <h2 className='dish-name'>{activeDishInfo.name}</h2>
        <div className="social-share">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='icon' />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane className='icon' />
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
            <FaMediumM className='icon' />
          </a>
          <a href="mailto:example@example.com">
            <FaMailBulk className='icon' />
          </a>
        </div>
      </div>
      <div className="dish-card">
        <div className="card-header">
          <img src={`/static/images/paella.png`} alt={'paella'} />
          <div className="difficulty">Difficulty: {activeDishInfo.difficulty}</div>
        </div>
        <div className="card-body">
          <p>{activeDishInfo.description}</p>
          <a href={activeDishInfo.recipeUrl} target="_blank" rel="noopener noreferrer">View Recipe</a>
        </div>
      </div>
      <div className="dish-card">
        <div className="card-body">
          <div className="info-row">
            <div className="info-label">Seafood:</div>
            <div className="info-value">{activeDishInfo.seafood}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Produce:</div>
            <div className="info-value">{activeDishInfo.produce}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Spices:</div>
            <div className="info-value">{activeDishInfo.spices}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Olive Oil:</div>
            <div className="info-value">{activeDishInfo.oliveOil}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Volume:</div>
            <div className="info-value">{activeDishInfo.volume} ml</div>
          </div>
          <div className="info-row">
            <div className="info-label">Serves:</div>
            <div className="info-value">{activeDishInfo.serves}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Authenticity:</div>
            <div className="info-value">{activeDishInfo.authenticity}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Stock:</div>
            <div className="info-value">{activeDishInfo.stock}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
