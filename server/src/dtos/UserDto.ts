import { IUser } from "../types";

export class UserDto {
    _id;
    name;
    surname;
    email;
    gender;
    image;
    bio;

    constructor(user: IUser) {
        this._id = user._id;
        this.name = user.name;
        this.surname = user.surname;
        this.email = user.email;
        this.gender = user.gender;
        this.image = user.image;
        this.bio = user.bio
    }
}