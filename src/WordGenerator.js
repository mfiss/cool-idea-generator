import React, { Component } from 'react';

const WordGenerator = (props) => (
  <div className="wordGroup">
  {props.options.map(option => {
    return (
      <button type="button" 
      className="pt-button"
      onClick={props.controlFunc}
      key={option.word}>
      {option.word}
      </button>
      );
      })}
</div>
)

export default WordGenerator;