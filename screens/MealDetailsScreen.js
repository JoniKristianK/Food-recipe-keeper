import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealsDetailsScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>MealsDetailsScreen</Text>
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

export default MealsDetailsScreen;
