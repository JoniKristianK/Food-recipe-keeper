import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
	headerTitle: 'A Screen',
};

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
		},
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetail: MealDetailScreen,
	},
	{
		// initialRouteName: 'Categories',
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons
						name='ios-restaurant'
						size={25}
						color={tabInfo.tintColor}
					/>
				);
			},
			tabBarColor: Colors.primary,
		},
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons
						name='ios-star'
						size={25}
						color={tabInfo.tintColor}
					/>
				);
			},
			tabBarColor: Colors.accent,
		},
	},
};

const MealsFavTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeTintColor: 'white',
				shifting: true,
				barStyle: {
					backgroundColor: Colors.primary,
				},
		  })
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					activeTintColor: Colors.accent,
				},
		  });

export default createAppContainer(MealsFavTabNavigator);
