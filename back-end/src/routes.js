import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res, next) => {
    return res.json({ ok: true })
});

routes.post('/users', UserController.store);
routes.get('/users', UserController.show);

export default routes;