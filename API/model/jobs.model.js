import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const jobSchema= mongoose.Schema({
    _id:Number,
    comp_name: {
        type:String,
        required : [true,'Company Name is Required'],
        lowercase  : true,
        trim : true,
    },
    subCatname : {
        type : String,
        required : [true, "Category name is required"],
        lowercase : true,
        trim : true
    },
    job_location: {
        type : String,
        required : [true,'Location is Required'],
        lowercase  : true,
        trim : true,
    },
    job_type: {
        type : String,
        required :[true ,'job Type is required'],
        lowercase : true,
        trim : true,
    },
    job_desc :{
        type : String,
        trim :true,
        required : true,
    },
    tech : {
        type : String,
        lowercase : true,
        trim :true,
        required : true,
    },
    requirment : {
        type : String,
        trim : true,
        lowercase : true,
        required : true,
    },
    experenice :{
        type : String,
        trim :true,
        lowercase :true,
        required : true,
    },
    package :{
        type : String,
        trim :true,
        lowercase :true,
    },
    deadline :{
        type : String,
        trim :true,
        lowercase :true,
        required : true,
    },
    info : String,
});

jobSchema.plugin(uniqueValidator);
const jobSchemaModel = mongoose.model("jobs_collection",jobSchema);

export default jobSchemaModel;