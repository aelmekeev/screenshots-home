import * as mongoose from 'mongoose';
import {ScreenshotSchema} from "../models/screenshot";
import {Request, Response} from 'express';

const Screenshot = mongoose.model('ScreenshotSchema', ScreenshotSchema);

export class Controller {
    public addScreenshot(req: Request, res: Response) {
        const newScreenshot = new Screenshot(req.body);

        newScreenshot.save((err, contact) => {
            if(err) {
                res.send(err);
            } else {
                res.json(contact);
            }
        })
    }
}