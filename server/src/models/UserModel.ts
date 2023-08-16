import { Schema, model } from "mongoose";

import { IUser } from "../types";

const UserModel = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    gender: { type: String, required: true },
    image: { type: String, default: '' },
    bio: { type: String, default: '' }
})

export default model<IUser>('User', UserModel);