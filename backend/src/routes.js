const Router = require('express').Router;
const multer = require('multer');

const multerConfig = require('./config/multer');

const AdminUserController = require('./app/controllers/AdminUserController');
const UserController = require('./app/controllers/UserController');
const CompanyController = require('./app/controllers/CompanyController');
const CompanyBranchController = require('./app/controllers/CompanyBranchController');
const BranchAssetsController = require('./app/controllers/BranchAssetsController');

const routes = new Router();
const upload = multer(multerConfig);

// Route to create admin users
routes.post('/admin-users', AdminUserController.store);
routes.put('/admin-users/:_id', AdminUserController.update);
routes.get('/admin-users', AdminUserController.index);
routes.delete('/admin-users/:_id', AdminUserController.delete);

// Route to create ordinary users
routes.post('/users', UserController.store);
routes.put('/users/:_id', UserController.update);
routes.get('/users', UserController.index);
routes.delete('/users/:_id', UserController.delete);

// Route to create companies
routes.post('/companies', CompanyController.store);
routes.get('/companies', CompanyController.index);

// Route to create subsidiaries
routes.post('/subsidiaries', CompanyBranchController.store);
routes.get('/subsidiaries', CompanyBranchController.index);

// Route to create assets
routes.get('/branchassets', BranchAssetsController.index);
routes.post('/branchassets', upload.single('image'), BranchAssetsController.store);

module.exports = routes;