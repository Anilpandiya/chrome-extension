import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './AddRecipeForm.css';

const AddRecipeForm = ({ updateDishes }) => {
    const [recipeData, setRecipeData] = useState({
        name: '',
        origin: '',
        description: '',
        difficulty: 1,
        protein: '',
        produce: '',
        spice: '',
        cookingOil: '',
        volume: 0,
        serves: 1,
        authenticity: '',
        stock: ''
    });

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRecipeData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate origin field
        if (recipeData.origin.length !== 2) {
            // Display an error message or perform any desired validation handling
            alert('Origin should be exactly 2 characters');
            return;
        }

        const payload = {
            ...recipeData,
            difficulty: Number(recipeData.difficulty),
            volume: Number(recipeData.volume),
            serves: Number(recipeData.serves)
        };

        try {
            const response = await axios.post(
                'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes',
                payload
            );
            alert(response.data.message);
            console.log(response.data.message); // Recipe added successfully

            //update all dishes
            updateDishes();
        } catch (error) {
            // Handle error
            console.error('Error adding recipe:', error);
            // Show error toast
        }
    };

    return (
        <div className="add-recipe-container">
            <div className="header">
                <button className="go-back-button">
                    <span className="back-icon" onClick={handleGoBack}>&#8249;</span>Add new recipe
                </button>
            </div>
            <hr className="separator" />
            <form className="recipe-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={recipeData.name}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Origin</label>
                        <input
                            type="text"
                            name="origin"
                            value={recipeData.origin}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                </div>
                <div className="row">

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            name="description"
                            value={recipeData.description}
                            onChange={handleInputChange}
                            className="form-input description"
                            placeholder='Describe your recipe...'
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label className="form-label">Difficulty</label>
                        <input
                            type="number"
                            name="difficulty"
                            value={recipeData.difficulty}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Protein</label>
                        <input
                            type="text"
                            name="protein"
                            value={recipeData.protein}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label className="form-label">Produce</label>
                        <input
                            type="text"
                            name="produce"
                            value={recipeData.produce}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Spice</label>
                        <input
                            type="text"
                            name="spice"
                            value={recipeData.spice}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label className="form-label">Cooking Oil</label>
                        <input
                            type="text"
                            name="cookingOil"
                            value={recipeData.cookingOil}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Volume</label>
                        <input
                            type="number"
                            name="volume"
                            value={recipeData.volume}
                            onChange={handleInputChange}
                            className="form-input unit"
                        />
                         <span className="input-unit unit-1">grams</span>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label className="form-label">Serves</label>
                        <input
                            type="number"
                            name="serves"
                            value={recipeData.serves}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                        <span className="input-unit unit-2">people</span>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Authenticity</label>
                        <input
                            type="text"
                            name="authenticity"
                            value={recipeData.authenticity}
                            onChange={handleInputChange}
                            className="form-input"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Stock</label>
                    <input
                        type="text"
                        name="stock"
                        value={recipeData.stock}
                        onChange={handleInputChange}
                        className="form-input stock"
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="submit-button">
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipeForm;
