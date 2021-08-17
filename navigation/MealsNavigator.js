import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';

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
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor:
					Platform.OS === 'android' ? Colors.primary : '',
			},
			headerTintColor:
				Platform.OS === 'android' ? 'white' : Colors.primary,
			headerTitle: 'A Screen',
		},
	}
);

export default createAppContainer(MealsNavigator);
