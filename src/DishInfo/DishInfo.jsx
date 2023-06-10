import React from 'react';
import { FaTwitter, FaTelegramPlane, FaMediumM } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import './DishInfo.css';

const DishInfo = ({ activeDishInfo }) => {
    // const defaultRecipeUrl = 'https://anilpandiya.github.io/';
    const flags = ['italy', 'japan', 'spain'];
    const dishes = ['pizza', 'sushi', 'paella'];

    const randomIndex = Math.floor(Math.random() * flags.length);
    const flagImg = flags[randomIndex];
    const dishesImg = dishes[randomIndex];

    return (
        <>
            <div className="dish-info">
                <img src={activeDishInfo?.flag || `/static/images/${flagImg}.png`} alt={'flagImage'} />
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
                    <Link to="/add-recipe" className="add-btn">
                        + Add recipe
                    </Link>
                </div>
            </div>
            <div className="dish-card dish-card-1">
                <div className="card-header">
                    <img src={activeDishInfo?.imgUrl || `/static/images/${dishesImg}.png`} alt={'dishImage'} />
                    <div className="difficulty">Difficulty: {activeDishInfo.difficulty}</div>
                </div>
                <div className="card-body">
                    <p>{activeDishInfo.description}</p>
                    {/* <a href={activeDishInfo?.recipeUrl || defaultRecipeUrl } target="_blank" rel="noopener noreferrer">View Full Recipe</a> */}
                </div>
            </div>
        </>
    )
}

export default DishInfo;