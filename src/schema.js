import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `

type Word {
	_id: ID
	word: String
	wordType: String
}

type Query {
	allWords: [Word]
	getSomeRandomWords(numWords: Int!): [Word]
	getSomeRandomWordsByWordType(numWords: Int!, wordType: [String]): [Word]
	getWordById(_id: ID) : Word
	getWordByWord(word: String) : Word
	getWordByType(wordType: [String]) :[Word]
}

input WordInput{
	word: String!
	wordType: String!
	nounType: String
	verbType: String
	tags: String
}

type Mutation {
	createWord(input: WordInput) : Word
	updateWord(_id: ID!, input: WordInput) : Word
	deleteWord(_id: ID) : Word
}
`
export default makeExecutableSchema({
    typeDefs,
    resolvers
});
