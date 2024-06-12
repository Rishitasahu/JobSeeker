import express from 'express';
import * as jobsController from '../controller/jobs.controller.js';
var router = express.Router();

router.post('/save',jobsController.save);

router.post('/login',jobsController.login);

router.get('/fetch',jobsController.fetch);

router.patch('/update',jobsController.updateUser);

router.delete('/delete',jobsController.del);

export default router;