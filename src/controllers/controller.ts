import * as mongoose from 'mongoose';
import {ScreenshotSchema} from "../models/screenshot";
import {Request, Response} from 'express';

const Screenshot = mongoose.model('ScreenshotSchema', ScreenshotSchema);

export class Controller {
    public addScreenshot(req: Request, res: Response) {
        const newScreenshot = new Screenshot(req.body);

        newScreenshot.save((err, screenshot) => {
            err ? res.send(err) : res.json(screenshot);
        })
    }

    public getScreenshot(req: Request, res: Response) {
        Screenshot.findById(req.params.id, (err, screenshot) => {
            err ? res.send(err) : res.json(screenshot);
        });
    }

    public deleteScreenshot(req: Request, res: Response) {
        Screenshot.remove({_id: req.params.id}, (err) => {
            err ? res.send(err) : res.json({message: 'Screenshot was successfully removed.'});
        });
    }
}