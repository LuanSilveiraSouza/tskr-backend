const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/user', UserController.list);
routes.post('/user/add', UserController.add);
routes.delete('/user/:name/delete', UserController.delete);
routes.get('/login', UserController.login);

module.exports = routes;