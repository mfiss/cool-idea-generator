import { combineReducers } from 'redux'

const wordList = (state = [], action) => {
	switch (action.type) {
		case "ADD_WORD":
		return [...state, action.word];
		default:
		return state;
	}
}

const wordTypeList = (state = [], action) => {
	switch (action.type) {
		case "ADD_WORDTYPE":
		return [...state, action.wordType];
		case "REMOVE_WORDTYPE":
		return state.filter(wT => wT !== action.wordType);
		default:
		return state;
	}
}

const rootReducer = combineReducers({wordList, wordTypeList})

export default rootReducer