//this is simply a presentation component

import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import NewsListSeparator from './NewsListSeparator';
import Icon from '@expo/vector-icons/Ionicons';


const ArticleListItem = ({ item, onArticleSelected }) => {

	return(
		<TouchableHighlight onPress={ onArticleSelected } underlayColor="#c0c0c0">	
			<View style={ styles.container }>
				<View style={ styles.title }>		
					<Text style={ styles.text }>{ item.title }</Text>
				</View>

				<View style={ styles.chevronBox }>
					<Text style={ styles.chevron }>
						<Icon name={ 'ios-arrow-forward' } />
					</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
};

export default ArticleListItem;


const styles = StyleSheet.create({

	container: {
		padding: 12,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	title: {
		width: '90%',
	},

  	text: {
		fontWeight: 'bold',
		fontSize: 16,
  	},

  	chevronBox: {
  		width: 40,

  	},

  	chevron: {
  		color: '#999',
  		marginLeft: 12,
  		fontSize: 50,
  	}

});











//class ArticlesListItem extends Component {
//   constructor() {
//     super();

//     this.handlePress = this.handlePress.bind(this);
//   }

//   handlePress() {
//     const { article, onArticleSelected } = this.props;
//     onArticleSelected(article);
//   }

//   render() {
//     const { article } = this.props;

//     return (
//       <TouchableHighlight underlayColor={colors.dove} onPress={this.handlePress}>
//         <View style={styles.container}>
//           <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
//             {article.title}
//           </Text>
//         </View>
//       </TouchableHighlight>
//     );
//   }
// }

// export default ArticlesListItem;