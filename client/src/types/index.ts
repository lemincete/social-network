export interface IUser {
    [key: string]: string,
    _id: string,
    name: string,
    surname: string,
    email: string,
    gender: string,
    image: string,
    bio: string
}

export interface ISubs {
    subscribers: string[],
    subscriptions: string[]
}