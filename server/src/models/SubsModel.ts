import { Schema, model } from "mongoose";

import { ISubs } from "../types";

const SubsModel = new Schema<ISubs>({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    subscriptions: { type: [String], default: [] },
    subscribers: { type: [String], default: [] }
})

export default model<ISubs>('Subs', SubsModel)