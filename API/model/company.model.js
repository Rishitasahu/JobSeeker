import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const companySchema= mongoose.Schema({
    _id:Number,
    company_name: {
        type:String,
        required : [true,'Name is Required'],
        lowercase  : true,
        trim : true,
    },
    company_dir_name: {
        type:String,
        required : [true,'Director Name is Required'],
        lowercase  : true,
        trim : true,
    },
    company_email: {
        type : String,
        required : [true,'Email is Required'],
        unique : true,
        lowercase  : true,
        trim : true,
    },
    company_password: {
        type : String,
        required :[true ,'Password is required'],
        maxlength : 10,
        minlength : 5,
        lowercase : true,
        trim : true,
    },
    company_mobile :{
        type : Number,
        minlength :10,
        maxlength:10,
        trim :true,
        required : [true,"Mobile required"],
    },
    company_headquater : {
        type : String,
        lowercase : true,
        trim :true,
        required : [true,"company_headquater required"],
    },
    company_descrip : {
        type : String,
        trim : true,
        lowercase : true,
        required : [true,"description required"],
    },
    company_founded : {
        type : String,
        trim : true,
        required : true,
    },
    company_size : {
        type : Number,
        trim : true,
        lowercase : true,
        required : true,
    },
    company_certifiy_num : {
        type : String,
        trim : true,
        lowercase : true,
        required : true,
    },
    status : Number,
    role : String,
    info : String,
});

companySchema.plugin(uniqueValidator);
const companySchemaModel = mongoose.model("company_collection",companySchema);

export default companySchemaModel;