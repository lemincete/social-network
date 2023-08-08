import { Schema } from "mongoose";

declare global {
    namespace Express {
        interface Request {
            userId: string
        }
    }
}

export interface IUser {
    _id: string,
    email: string,
    password: string,
    name: string,
    surname: string,
    gender: string
}

export interface IToken {
    user: Schema.Types.ObjectId,
    refreshToken: string
}