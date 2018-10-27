import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./routes/routes";

class App {

    public app: express.Application;
    public router: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
    }

    private config(): void{
        this.app.use(bodyParser.json({limit: '25mb'}));
    }
}

export default new App().app;