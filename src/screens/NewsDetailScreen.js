import React, { Component } from 'react';
import NewsDetail from '../components/NewsDetail';

class NewsDetailScreen extends Component {

	static navigationOptions = ({ navigation }) => {				return {
			title: 'BBC News'
		};
	}; 

  	render() {
    	const { article } = this.props.navigation.state.params;

    return (
    	<NewsDetail article={ article } />
	);
  }
}

export default NewsDetailScreen;
