const initialState = { wordList : [] };

const wordListReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_WORD":
		return { ...state, wordList: [...state.wordList, action.word] };
		default:
		return state;
	}
}

export default wordListReducer