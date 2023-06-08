import React from 'react';
import { FaTwitter, FaTelegramPlane, FaMediumM, FaMailBulk } from 'react-icons/fa';

import './DishInfo.css';

const DishInfo = ({ activeDishInfo }) => {
    return (
        <>
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
            <div className="dish-card dish-card-1">
                <div className="card-header">
                    <img src={`/static/images/${activeDishInfo.imgUrl}.png`} alt={'paella'} />
                    <div className="difficulty">Difficulty: {activeDishInfo.difficulty}</div>
                </div>
                <div className="card-body">
                    <p>{activeDishInfo.description}</p>
                    <a href={activeDishInfo.recipeUrl} target="_blank" rel="noopener noreferrer">View Full Recipe</a>
                </div>
            </div>
        </>
    )
}

export default DishInfo;