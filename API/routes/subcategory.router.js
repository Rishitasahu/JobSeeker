import express from 'express';
import * as subcategoryController from '../controller/subcategory.cotroller.js';
var router = express.Router();

router.post('/save',subcategoryController.save);

router.get('/fetch',subcategoryController.fetch);

router.patch('/update',subcategoryController.update);

router.delete('/delete',subcategoryController.del);

export default router;