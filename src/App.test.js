import React from 'react';
import { render, getByLabelText } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the SearchBar component', () => {
    const { container } = render(<App />);
    const searchContainer = container.querySelector('.search-container');
    expect(searchContainer).toBeInTheDocument();
  });

  test('renders the DishInfo component', () => {
    const { container } = render(<App />);
    const dishInfoElement = container.querySelector('.dish-info');
    expect(dishInfoElement).toBeInTheDocument();
  });

  test('renders the DishIngredients component', () => {
    const { container } = render(<App />);
    const dishIngredientsElement = container.querySelector('.dish-card');
    expect(dishIngredientsElement).toBeInTheDocument();
  });
});
