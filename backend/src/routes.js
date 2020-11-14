import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import AdminUserController from './app/controllers/AdminUserController';
import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import CompanyBranchController from './app/controllers/CompanyBranchController';
import BranchAssetsController from './app/controllers/BranchAssetsController';

const routes = new Router();
const upload = multer(multerConfig);

// Route to create admin users
routes.post('/admin-users', AdminUserController.store);

// Route to create ordinary users
routes.post('/users', UserController.store);
routes.put('/users/:_id', UserController.update);
routes.get('/users', UserController.index);

// Route to create companies
routes.post('/companies', CompanyController.store);
routes.get('/companies', CompanyController.index);

// Route to create subsidiaries
routes.post('/subsidiaries', CompanyBranchController.store);

// Route to create assets
routes.post('/branchassets', upload.single('image'), BranchAssetsController.store);

export default routes;