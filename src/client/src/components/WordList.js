import React from "react";
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { wordList: state.wordList} };

const ConnectedList = ({ wordList }) => (
	<h1>{ wordList.join(" ") }</h1>
	);

const WordList = connect(mapStateToProps)(ConnectedList);

export default WordList;