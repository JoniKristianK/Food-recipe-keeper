import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = ({ navigation }) => {
	const catId = navigation.getParam('categoryId');

	const availableMeals = useSelector((state) => state.MEALS.filteredMeals);

	const displayedMeals = availableMeals.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);

	return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');

	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedCategory.title,
	};
};

export default CategoryMealScreen;
