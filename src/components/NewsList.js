//This is the full list but still just a presentation component but it is the parent of the ArticleListItem component

import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import ArticleListItem from './ArticleListItem';
import NewsListSeparator from './NewsListSeparator';

const extractArticleItemKey = item => { 
	return item.publishedAt
};

const NewsList = ({ articles, onArticleSelected }) => { 
//onArticleSelected allows us to navigate.

	const renderArticleItem = ({ item }) => {

		const onSelected = () => {
			onArticleSelected(item); 
		}

		return (
			<ArticleListItem 
				item={ item } 
				onArticleSelected={ onSelected }/>
		);
	};

//FlatList always accepts 2 props, data and renderItem
	return(
	<FlatList 
		data={ articles }
		renderItem={ renderArticleItem }
		keyExtractor={ extractArticleItemKey }
		ItemSeparatorComponent={ NewsListSeparator }
	/>
)};


export default NewsList;