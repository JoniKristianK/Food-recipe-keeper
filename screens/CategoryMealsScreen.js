import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = ({ navigation }) => {
	const catId = navigation.getParam('categoryId');

	const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
	return (
		<View style={styles.screen}>
			<Text>CategoryMealsScreen</Text>
			<Text>{selectedCategory.title}</Text>
			<Button
				title='Go to details'
				onPress={() => navigation.navigate('MealDetails')}
			/>
			<Button title='Go Back' onPress={() => navigation.goBack()} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
