//this is where all the logic goes for the navigation
//get EsLint, sometimes they get in the way

import { Platform, StatusBar, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants, WebBrowser } from 'expo';

import NewsListScreen from './screens/NewsListScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';

const isAndroid = (Platform.OS === 'android'); //this is saying if the Operating system is android then choose the settings below.

//this is better because it covers all bases, ios, macos, web, windows, android...
const extraStyles = Platform.select({
	android: {
		marginTop: Constants.statusBarHeight
	}
});

StatusBar.setBarStyle('light-content');

//below is like Routes in react web based apps, this is setting up the two pages or screens

//StackNavigator accepts two objects List and Detail
export default StackNavigator({
	List: { screen: NewsListScreen },
	Detail: { screen: NewsDetailScreen },
}, {

	//the cardStyle is the background of the screen
	cardStyle: {
		backgroundColor: 'white',
	},

	navigationOptions: {
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#d35400',
			...extraStyles
		}
	}


});