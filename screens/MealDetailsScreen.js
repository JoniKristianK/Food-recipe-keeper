import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = (props) => {
	return (
		<View style={styles.listItem}>
			<DefaultText>{props.children}</DefaultText>
		</View>
	);
};

const MealDetailScreen = ({ navigation }) => {
	const mealId = navigation.getParam('mealId');

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<ScrollView>
			<Image
				source={{ uri: selectedMeal.imageUrl }}
				style={styles.image}
			/>
			<View style={styles.details}>
				<DefaultText>{selectedMeal.duration}m</DefaultText>
				<DefaultText>
					{selectedMeal.complexity.toUpperCase()}
				</DefaultText>
				<DefaultText>
					{selectedMeal.affordability.toUpperCase()}
				</DefaultText>
			</View>
			<Text style={styles.title}>ingredients</Text>

			{selectedMeal.ingredients.map((ingredient, index) => (
				<ListItem key={index}>{ingredient}</ListItem>
			))}

			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map((step, index) => (
				<ListItem key={index}>{step}</ListItem>
			))}
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam('mealId');
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: selectedMeal.title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title='Favorite'
					iconName='ios-star'
					onPress={() => {
						console.log('Mark as favorite!');
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-between',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'center',
	},
	listItem: {
		marginVertical: 4,
		marginHorizontal: 20,
		borderColor: '#ccc',
		backgroundColor: '#ECDEDECA',
		borderWidth: 1,
		padding: 10,
	},
});

export default MealDetailScreen;
