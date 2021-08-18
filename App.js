import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'; // expo install expo-app-loading
import { useFonts } from 'expo-font';
import { enableScreens } from 'react-native-screens';

// disables warnings / hints for now
console.disableYellowBox = true;

enableScreens();

import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
	let [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return <MealsNavigator />;
	}
}
