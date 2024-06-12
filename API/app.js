import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

//to load routers 
import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';
import subCategoryRouter from './routes/subcategory.router.js';
import companyRouter from './routes/company.router.js';
import jobsCategoryRouter from './routes/jobs.router.js';
var app = express();

//to contect with UI end 
app.use(cors());

//extract data from request 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extends":true}));

//to extract body file data from request
app.use(fileUpload());

app.use('/user',userRouter);
app.use('/category',categoryRouter);
app.use('/subcategory',subCategoryRouter);
app.use('/company',companyRouter)
app.use('/jobs',jobsCategoryRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");