import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from 'styled-components'
import { addWord } from "../actions/index";

const popin = keyframes`
  0% { opacity: 0; transform: scale(0.3); }
  100% { opacity: 1; transform: scale(1); }
  `

const StyledWordButton = styled.button`
  background: #61DAFB;
  border-radius: 1rem;
  border: none;
  color: #1E2A36;
  margin: 0.5em;
  padding: 0 2vw;
  flex-grow:1;
  cursor:pointer;
  font-size: calc(1vw + 1vh + .5vmin);;
  transform-origin: center;
  animation: ${popin} .3s ease;

  &:hover {
    background: #C5D86D;
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    addWord: word => dispatch(addWord(word))
  };
};

class ConnectedButton extends Component {

handleClick = e => {
  this.props.addWord(this.props.content);

};

render() {
  return(
    <StyledWordButton onClick={this.handleClick}> {this.props.content} </StyledWordButton>
    )
};
} 


const WordButton = connect(null, mapDispatchToProps)(ConnectedButton);



export default WordButton