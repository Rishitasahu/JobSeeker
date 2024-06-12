import express from 'express';
import * as categoryController from '../controller/category.cotroller.js';
var router = express.Router();

router.post('/save',categoryController.save);
router.get('/fetch',categoryController.fetch);
router.patch('/update',categoryController.update);
router.delete('/delete',categoryController.del);
export default router;