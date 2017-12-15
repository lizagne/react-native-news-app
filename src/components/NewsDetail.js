import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import moment from 'moment';

const NewsDetail = ({ article }) => {

	const imageURL = { uri: article.urlToImage };
	const header = article.title;
	const content = article.description;

	return(
		<View style={ styles.container }>
			<ScrollView>{ article.urlToImage ? (
				<Image 
					style={ styles.image }
					source={ imageURL } /> ) : null
				}
					<Text style={ styles.header }>{ header }</Text>
					<View style={ styles.separator }></View>
					<Text style={ styles.description }>{ content }</Text>						
			</ScrollView>
 		</View>
	)};

export default NewsDetail;


const styles = StyleSheet.create({


	container: {
		padding: 12,
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		marginTop: 10,
		fontSize: 18,
		fontWeight: 'bold'
	},

	title: {
		fontSize: 18
	},

	separator: {
		borderBottomColor: '#f2f2f2',
		borderStyle: 'solid',
		borderBottomWidth: 1
	},

	image: {
		aspectRatio: 16/9,
	}

})