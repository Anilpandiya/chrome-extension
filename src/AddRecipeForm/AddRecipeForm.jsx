import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
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

        try {
            const response = await axios.post(
                'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes',
                recipeData
            );
            alert(response.data.message)
            console.log(response.data.message); // Recipe added successfully
            // Show success toast
        } catch (error) {
            // Handle error
            console.error('Error adding recipe:', error);
            // Show error toast
        }
    };

    return (
        <>
            <button onClick={handleGoBack}>Go Back</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={recipeData.name} onChange={handleInputChange} />
                </label>
                <label>
                    Origin:
                    <input type="text" name="origin" value={recipeData.origin} onChange={handleInputChange} />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={recipeData.description}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Difficulty:
                    <input
                        type="number"
                        name="difficulty"
                        value={recipeData.difficulty}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Protein:
                    <input type="text" name="protein" value={recipeData.protein} onChange={handleInputChange} />
                </label>
                <label>
                    Produce:
                    <input type="text" name="produce" value={recipeData.produce} onChange={handleInputChange} />
                </label>
                <label>
                    Spice:
                    <input type="text" name="spice" value={recipeData.spice} onChange={handleInputChange} />
                </label>
                <label>
                    Cooking Oil:
                    <input
                        type="text"
                        name="cookingOil"
                        value={recipeData.cookingOil}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Volume:
                    <input type="number" name="volume" value={recipeData.volume} onChange={handleInputChange} />
                </label>
                <label>
                    Serves:
                    <input type="number" name="serves" value={recipeData.serves} onChange={handleInputChange} />
                </label>
                <label>
                    Authenticity:
                    <input
                        type="text"
                        name="authenticity"
                        value={recipeData.authenticity}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Stock:
                    <input type="text" name="stock" value={recipeData.stock} onChange={handleInputChange} />
                </label>
                <button type="submit">Add Recipe</button>
            </form>
        </>

    );
};

export default AddRecipeForm;
