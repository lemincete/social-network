import { ISubs } from "../types";

export class SubsDto {

    subscribers;
    subscriptions;

    constructor(model: ISubs) {
        this.subscribers = model.subscribers;
        this.subscriptions = model.subscriptions;
    }
}