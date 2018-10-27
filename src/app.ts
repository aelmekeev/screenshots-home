import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./routes/routes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public router: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/Screenshots';

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
        this.mongoSetup()
    }

    private config(): void{
        this.app.use(bodyParser.json({limit: '25mb'}));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;