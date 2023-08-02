import { config } from 'dotenv';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

import cors from 'cors';

import { CLIENT_URL } from './constants';

const app = express();

app.use(cors({
    origin: CLIENT_URL,
    credentials: true
}))

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: CLIENT_URL
    }
});

config({ path: "./config/.env" });

const { DB_URL, PORT } = process.env as { DB_URL: string, PORT: string };

const start = async () => {
    try {

        io.on('connection', (socket) => {
            console.log('work!');
        })

        server.listen(PORT, () => {
            console.log('api is starting')
        })


    } catch (e) {
        console.log(e);
    }
}

start();