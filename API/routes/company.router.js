import express from 'express';
import * as companyController from '../controller/company.controller.js';
var router = express.Router();

router.post('/save',companyController.save);

router.post('/login',companyController.login);

router.get('/fetch',companyController.fetch);

router.patch('/update',companyController.updateUser);

router.delete('/delete',companyController.del);

export default router;