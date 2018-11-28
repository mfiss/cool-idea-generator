
import Word from './models/word';

export const resolvers = {
    Query: {
        async allWords() {
            return await Word.find()
        },
        async getSomeRandomWords(_, { numWords }) {
            return await Word.aggregate(
        [
             { $unwind : "$wordType"},
             { $sample : { size: numWords }}
             
        ])
        },
async getSomeRandomWordsByWordTypes(_, [{ numWords }, { wordTypes }]) {

            return await Word.aggregate(
        [    
             { $in : wordTypes },
             { $unwind : "$wordType"},
             { $sample : { size : numWords }}
             
        ])
        },        
        async getWordById(_, { _id }) {
            return await Word.findById(_id);
        },
        async getWordByWord(_, { word }) {
            return await Word.findOne({word});
        },
        async getWordByType(_, { wordType }) {
            return await Word.find({ wordType })
        }
    },
    Mutation: {
        async createWord(_, { input }) {
            return await Word.create(input);
        },
        async updateWord(_, { _id, input }) {
            return await Word.findOneAndUpdate({ _id }, input, { new: true })
        },
        async deleteWord(_, { _id }) {
            return await Word.findByIdAndRemove(_id);
        }
    }
}
