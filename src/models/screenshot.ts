import * as mongoose from 'mongoose';

export const ScreenshotSchema = new mongoose.Schema({
    image: Buffer,
    tags: [String],
    createdDate: { type: Date, default: Date.now() }
});