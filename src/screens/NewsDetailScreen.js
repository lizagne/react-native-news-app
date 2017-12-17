import React, { Component } from 'react';
import NewsDetail from '../components/NewsDetail';
import ButtonOut from '../components/ButtonOut';
import { WebBrowser } from 'expo';

class NewsDetailScreen extends Component {

	static navigationOptions = ({ navigation }) => {				

		const url = navigation.state.params.article.url;
        console.log(url);

		function loadBrowser() {
            WebBrowser.openBrowserAsync(url);
        }

        return {
            headerRight: <ButtonOut onPress={ loadBrowser }/>,
            title: 'BBC News'
        };
	};

  	render() {
    	const { article } = this.props.navigation.state.params;

    return(
    	<NewsDetail article={ article } />
	);
  }
}

export default NewsDetailScreen;




    