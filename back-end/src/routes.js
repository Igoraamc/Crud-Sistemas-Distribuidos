import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

/**
 * This route should create a new user
 */
routes.post('/users', UserController.store);

/**
 * This route should list all users
 */
routes.get('/users', UserController.show);

/**
 * This route should list one user
 */
routes.get('/user/:id', UserController.index);

/**
 * This route should update one user
 */
routes.put('/user/:id', UserController.update);

/**
 * This route should delete one user
 */
routes.delete('/user/:id', UserController.delete);

export default routes;