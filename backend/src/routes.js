import { Router } from 'express';

import AdminUserController from './app/controllers/AdminUserController';
import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import CompanyBranchController from './app/controllers/CompanyBranchController';

const routes = new Router();

// Route to create admin users
routes.post('/admin-users', AdminUserController.store);

// Route to create ordinary users
routes.post('/users', UserController.store);

// Route to create companies
routes.post('/companies', CompanyController.store);

//Route to create subsidiaries
routes.post('/subsidiaries', CompanyBranchController.store);

export default routes;