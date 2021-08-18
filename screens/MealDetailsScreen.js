import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealsDetailsScreen = ({ navigation }) => {
	const mealId = navigation.getParam('mealId');

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<View style={styles.screen}>
			<Text>{selectedMeal.title}</Text>
			<Button
				title='Go back to Categories'
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: selectedMeal.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default MealsDetailsScreen;
