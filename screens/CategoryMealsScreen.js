import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Text>CategoryMealsScreen</Text>
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
