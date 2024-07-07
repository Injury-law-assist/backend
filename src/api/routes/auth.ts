import { Router } from 'express';
import { Container } from 'typedi';
import AuthController from '../controllers/auth';

export default ({ app }: { app: Router }) => {
    const route = Router();
    app.use('/auth', route);
    /** 여기에 validMIddleware 가 필요함
     * example:
     * route.post('/login', 미들웨어, Container.get(AuthController).login.bind(AuthController));
     */
    route.post('/login', Container.get(AuthController).login.bind(AuthController));
    route.post('/join', Container.get(AuthController).join.bind(AuthController));
};
