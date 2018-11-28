import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WordSchema = new Schema({
	word : {
		type: String,
		required: true
	},
	wordType: {
		type: String || Array,
		required: true
	},
	nounType: {
		type: String || Array,
	},
	verbType: {
		type: String || Array,
	},
	tags: {
		type: String || Array
	}
})
export default mongoose.model('word', WordSchema, "defaultWords");