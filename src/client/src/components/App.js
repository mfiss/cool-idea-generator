import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { WordGrid } from '../containers/wordGrid';
import  WordList  from './WordList'
import styled from 'styled-components'

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

const StyledApp = styled.div`
text-align: center;
background: #1E2A36;
color: #E8E6E3;
display:flex;
flex-direction:column;
height:100vh;
`

const StyledFooter = styled.div`
  height:10vh;
  background: #00A7E1;
  width:100%
`

export class App extends Component {

  render() {
    return (
      <StyledApp>
      <WordList />
      <ApolloProvider client={client}>
      <WordGrid />
      </ApolloProvider>
      <StyledFooter>
      <p>here's a footer</p>
      </StyledFooter>
      </StyledApp>
      );
    
  }
}