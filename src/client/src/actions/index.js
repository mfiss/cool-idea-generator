let nextWordId = 0;

//Adds a word to "wordList" part of state
export const addWord = word => ({
	type: 'ADD_WORD',
	id: nextWordId++,
	word
})
