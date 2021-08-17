import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MealsDetailsScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Text>MealsDetailsScreen</Text>
			<Button
				title='Go back to Categories'
				onPress={() => navigation.popToTop()}
			/>
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
