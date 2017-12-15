//This is the container page

//logic, navigation 

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import articles from '../data/articles.json';
import NewsList from '../components/NewsList';


class NewsListScreen extends Component {
    static navigationOptions = { //this is the header bar
      title: 'BBC News'
    };

    constructor() {
      super();

      this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this); //binding 'this' method to the class
    }

    //add the navigate method
    navigateToDetailScreen(article) {
      this.props.navigation.navigate
      ('Detail', { article } ); //object single property article points to the article object
    }
 
  	render() {
	    return (

	      <View style={ styles.container }>
	        <NewsList 
            articles={ articles}
            onArticleSelected={ this.navigateToDetailScreen }/>
        </View>
    );
  }
}

export default NewsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  
});


//data
//renderItem



//order of things to make


// 1. Make the screens or containers
// 2. hook up the navigation
// 3. 








