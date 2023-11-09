import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(3000, () => {
  console.log('server is running on port 3000')
})

const mySecret = process.env.MONGO

const client = mongoose.connect(mySecret);

const connectToDatabase = async () => {
    try {
        await client
        console.log(`Connected to MongoDB`)

    } catch (err) {
        console.error(`Error connecting to the database: ${err}`)
    }
}
connectToDatabase();
