import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './route/reservationRoute.js';
import path from 'path';

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

// Parse the JSON string to object 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);

const __dirname = path.resolve(); // To resolve the current directory
app.use(express.static(path.join(__dirname, 'public', 'dist')));

// Catch-all handler to serve index.html for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'public', 'dist', 'index.html'));
});

dbConnection();

app.use(errorMiddleware);

export default app;
