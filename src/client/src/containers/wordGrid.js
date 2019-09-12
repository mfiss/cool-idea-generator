import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import WordButton from "../components/WordButton";
import styled from 'styled-components'

const GRID_QUERY = gql`
        query getSomeRandomWordsByWordType($numWords: Int!, $wordType: [String]) {
          getSomeRandomWordsByWordType(numWords: $numWords, wordType: $wordType) {
          _id
          word
          wordType
        }
      }
`

const StyledGrid = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
  overflow:hidden;
  flex-grow:1;
`

const numWords = () => {
  return 100;
}

const wordType = () => {
  return "noun";
}

const PopulateWordGrid = ({ numWords, wordType }) => (
      <Query query = { GRID_QUERY } variables={{ numWords, wordType }}>
       {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :( Try reloading!</p>;
          let RandomWordsSet = new Set(data.getSomeRandomWordsByWordType)
          return [...RandomWordsSet].map(({ _id, word, wordType }) => (
            <WordButton key={ _id } content={word}> { word }</WordButton>
            ));

          }}
          </Query>
  )

export class WordGrid extends Component {


  render() {
    return(
      <StyledGrid>
        <PopulateWordGrid numWords={ numWords() } wordType={ wordType() } />
          </StyledGrid>
        )};
      };