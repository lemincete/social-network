import { config } from 'dotenv';

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import cookieParser from 'cookie-parser';

import cors from 'cors';

import { errorMiddleware } from './middlewares/ErrorMiddleware';
import router from './router';

import mongoose from 'mongoose';

import { v2 as cloudinary } from 'cloudinary';

config({ path: "./config/.env" });

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME as string,
    api_key: process.env.CLOUD_API_KEY as string,
    api_secret: process.env.CLOUD_API_SECRET_KEY as string,
    secure: true,
})

import { CLIENT_URL } from './constants';

const app = express();

app.use(cors({
    origin: CLIENT_URL,
    credentials: true,
}))

app.use(cookieParser());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

app.use('/api', router);

app.use(errorMiddleware);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: CLIENT_URL
    }
});

const { DB_URL, PORT } = process.env as { DB_URL: string, PORT: string };

const start = async () => {
    try {

        io.on('connection', (socket) => {
            console.log('work!');
        })

        server.listen(PORT, () => {
            console.log('api is starting')
        })

        await mongoose.connect(DB_URL);

    } catch (e) {
        console.log(e);
    }
}

start();