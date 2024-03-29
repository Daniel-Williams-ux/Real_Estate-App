import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cors from 'cors'
import path from 'path';

dotenv.config();

const __dirname = path.resolve();

const app = express();

app.use(express.json())

app.listen(3000, () => {
  console.log('server is running on port 3000')
})

// Enable CORS for all routes
app.use(cors());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


// middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


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
