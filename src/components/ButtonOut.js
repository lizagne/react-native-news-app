import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default ButtonOut = props => (

	<TouchableOpacity style={ styles.buttonOut } onPress={ props.onPress } >
		<Icon style={ styles.icon } name="md-open" />
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	buttonOut: {
		marginRight: 10,
		marginTop: 4,
	},
	
	icon: {
		color: '#fff',
		fontSize: 20,
	}
});