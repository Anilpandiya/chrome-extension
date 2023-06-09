import React from 'react';
import './DishIngredients.css';

const DishIngredients = ({ activeDishInfo }) => {

    const getSubGradient = (str, id) => (<>
        <span>{str[0]} / </span> <span className={`txt-grd ${id === 'produce' ? 'sub-grd' : 'grd2'}`}>{str[1]}</span>
    </>);

    return (
        <div className="dish-card dish-card-2">
            <div className="card-body">
                <div className="info-row">
                    <div className="info-label">Seafood</div>
                    <div className="info-value txt-wht">{activeDishInfo.seafood}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Produce</div>
                    <div className="info-value txt-grd grd1">{activeDishInfo?.produce?.includes(',') ? getSubGradient(activeDishInfo.produce.split(','), 'produce') : activeDishInfo.produce}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Spices</div>
                    <div className="info-value txt-grd grd1">{activeDishInfo?.spice?.includes(',') ? getSubGradient(activeDishInfo.spice.split(','), 'spices') : activeDishInfo.spice}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Olive Oil</div>
                    <div className="info-value txt-grd grd2">{activeDishInfo.oliveOil}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Volume/Weight</div>
                    <div className="info-value txt-wht">{activeDishInfo.volume} ml</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Serves</div>
                    <div className="info-value txt-wht">{activeDishInfo.serves}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Authenticity</div>
                    <div className="info-value txt-grd grd2">{activeDishInfo.authenticity}</div>
                </div>
                <div className="info-row">
                    <div className="info-label">Stock</div>
                    <div className="info-value txt-grd grd2">{activeDishInfo.stock}</div>
                </div>
            </div>
        </div>)
}

export default DishIngredients