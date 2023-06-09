import axios from 'axios';

export const API_BASE_URL = 'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes';

// export const searchRecipes = async (query) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/recipes?search=${query}`);
//     return response.data;
//   } catch (error) {
//     // Handle error
//     console.error('Error searching recipes:', error);
//     throw error;
//   }
// };

export const getRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${recipeId}`); // Replace with your actual API endpoint to fetch a specific recipe by ID
    const recipe = response?.data?.message;
    return recipe;
  } catch (error) {
    // Handle error
    console.error('Error fetching recipe details:', error);
  }
};

export const addRecipe = async (recipeData) => {
  // Implement the function to add a new recipe
};
