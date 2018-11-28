import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';
import cors from "cors";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const path = require('path');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

app.use(
	'/graphql',
	cors(),
	graphqlHTTP({
    	graphiql: true,
    	schema
}));

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname+'/client/public/index.html'));
   		
    })

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running`);
})