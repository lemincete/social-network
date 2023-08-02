import { API_URL } from "../constants";

import { io } from "socket.io-client";

export const socket = io(API_URL, {
    autoConnect: true
})