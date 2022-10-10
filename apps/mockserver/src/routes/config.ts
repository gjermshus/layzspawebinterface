import { Request, Response, Router } from 'express';

class ConfigRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.router.post('/getconfig', this.getConfig);
    }

    public getConfig(request: Request, response: Response) {
        response.json({
            PRICE: 1.0,
            FINT: 2.0,
            CLINT: 1.0,
            RESTORE: 1.0,
            AUDIO: true,
            REBOOTTIME: Math.floor(Date.now() / 1000 - 48 * 60 * 60),
        });
    }
}

const router = new ConfigRouter();
export default router.router;