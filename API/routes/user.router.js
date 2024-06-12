import express from 'express';
import * as userController from '../controller/user.controller.js';
var router = express.Router();

router.post('/save',userController.save);

router.post('/login',userController.login);

router.get('/fetch',userController.fetch);

router.patch('/update',userController.updateUser);

router.delete('/delete',userController.del);

export default router;