import React, {Component} from 'react';
import CheckboxOrRadioGroup from './CheckboxOrRadioGroup';
import WordGenerator from './WordGenerator';
import data from './data.json';

export class PhraseGenerator extends Component {
	state = {
		wordSelections: data.wordSelections
	};

// 	handleWordButton = (e, data) => {
// 		const newWord = e.target.value;
// 		let newWordsArray;
// 		if(this.state.wordSelections.indexOf(newWord) > -1) {
// 		//returns a random index of an array
// 		const generateRandomWord = (data) => data[randInt(data.length)];

// 		//Generate random integer
// 		const randInt = (lessThan) => Math.floor(Math.random() * lessThan);

// 		//This runs through the json array and returns a new array of words of a certain "class" ie. adjectives, nouns - based on the wordType of the selectedWords
// 		const filterWords = (data, wordType) =>  data.filter(data => data.wordType === wordType);

// 		const randomWord = generateRandomWord(filterWords(data.words, this.state.selectedWords.wordType));

// 		newWordsArray = () => this.state.selectedWords.word.filter(s => s !== newWord)
// 	} else {
// 		newWordsArray = [...this.state.selectedWords, newWord];
// 	}
// 	this.setState({ selectedWords: newWordsArray }, () => console.log('word selection', this.state.selectedWords));
// };

handleWordSelection = (e) => {
	const newSelection = e.target.value;
	const isItInTheArray = (arrayItem) => arrayItem.sentenceStructure === newSelection ;
	const wordIndex = this.state.wordSelections.indexOf(this.state.wordSelections.find( isItInTheArray ));
	const selectedWordType = this.state.wordSelections[wordIndex]
const newArray = 

	//this.setState({?})
		console.log(this.state, newSelection, isItInTheArray, wordIndex, selectedWordType);
}

handleFormSubmit = (e) => {
	e.preventDefault();
	const formPayload = { selectedWords: this.state.selectedWords	};
	console.log('Send this in a POST request:', formPayload);
	this.setState({ selectedWords: [] });
}

testFunc = () => {
	console.log(this.state.wordSelections, this.state.selectedWords);
}

render() {

	return (
		<div>
		<form onSubmit={this.handleFormSubmit}>
		<h5>Select some words to build a phrase.</h5>

		<CheckboxOrRadioGroup
		setName={'words'}
		type={'checkbox'}
		controlFunc={this.handleWordSelection}
		options={this.state.wordSelections}
		 />

		<input
		type="submit"
		value="Generate a randomized phrase."/>
		<button
		onClick={this.handleClearForm}>Clear selection</button>
		</form>

		<div>

		<WordGenerator
		options={this.state.wordSelections.filter( n => (n.selected === true))}
						//this is definitely the problem
						controlFunc={this.handleWordButton}
						/>
						<button
						onClick={this.testFunc}>Test</button>
						</div>
						</div>
						);
}
}
