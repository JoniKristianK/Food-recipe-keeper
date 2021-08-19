import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
	switch (action.type) {
		// Remove or Add recipe to the favoriteMeals array
		case TOGGLE_FAVORITE:
			const existingIndex = state.favoriteMeals.findIndex(
				(meal) => meal.id === action.mealId
			);
			if (existingIndex >= 0) {
				const updatedFavMeals = [...state.favoriteMeals];
				updatedFavMeals.splice(existingIndex, 1);
				return {
					...state,
					favoriteMeals: updatedFavMeals,
				};
			} else {
				const meal = state.meals.find(
					(meal) => meal.id === action.mealId
				);
				return {
					...state,
					favoriteMeals: state.favoriteMeals.concat(meal),
				};
			}
		// If meal is set to false --> drop it from the array
		case SET_FILTERS:
			const appliedFilters = action.filters;
			const updatedFilteredMeals = state.meals.filter((meal) => {
				if (appliedFilters.glutenFree && !meal.isGlutenFree) {
					return false;
				}
				if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
					return false;
				}
				if (appliedFilters.vegan && !meal.isVegan) {
					return false;
				}
				if (appliedFilters.vegetarian && !meal.isVegetarian) {
					return false;
				}
				return true;
			});
			return {
				...state,
				filteredMeals: updatedFilteredMeals,
			};
		default:
			return state;
	}
};

export default mealsReducer;
