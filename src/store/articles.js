
const initialState = {
	collection: [] //set to an empty array
};


const reducer = (state = initialState, action) => {
	if(action.type === types.FETCH_ARTICLE_SUCCESS) {
		//handle the film data response

		return {
			...state,//spread syntax prevents you from mutating the state
			collection: action.payload //this is where the payload should be 
		};
	}
	//otherwise just return the state that was passed into the reducer
	return state;
}

const getArticlesSelector = (state) => state.articles.collection; //whatever comes after the fat arrow is what is going to be returned, so no need for curly braces or a return statement.

export default reducer;

//this is called a barrelled export
export {
	getArticlesSelector,
	actionCreators,
	fetchArticles
};