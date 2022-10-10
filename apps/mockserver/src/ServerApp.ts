import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import configRouter from './routes/config';


class ServerApp {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.setupMiddelware();
        this.setupRoutes();
    }

    private setupRoutes() {
        let router: express.Router = express.Router();
        router.get("/", (_req, res) => {
            res.json({
                messagE: "Hello World!"
            });
        })

        this.express.use('/', router);
        this.express.use('/getconfig', configRouter)
    }

    private setupMiddelware() {
        this.express.use(cors());
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new ServerApp().express;