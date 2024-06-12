import mongoose from 'mongoose';
const url="mongodb://localhost:27017/jobSeeker ";
mongoose.connect(url);

console.log("sucessfully created");