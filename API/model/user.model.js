import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const userSchema= mongoose.Schema({
    _id:Number,
    name: {
        type:String,
        required : [true,'Name is Required'],
        lowercase  : true,
        trim : true,
    },
    email: {
        type : String,
        required : [true,'Email is Required'],
        unique : true,
        lowercase  : true,
        trim : true,
    },
    password: {
        type : String,
        required :[true ,'Password is required'],
        maxlength : 10,
        minlength : 5,
        lowercase : true,
        trim : true,
    },
    mobile :{
        type : Number,
        minlength :10,
        trim :true,
        required : true,
    },
    address : {
        type : String,
        lowercase : true,
        trim :true,
        required : true,
    },
    city : {
        type : String,
        trim : true,
        lowercase : true,
        required : true,
    },
    gender :{
        type : String,
        trim :true,
        lowercase :true,
        required : true,
    },
    status : Number,
    role : String,
    info : String,
});

userSchema.plugin(uniqueValidator);
const userSchemaModel = mongoose.model("user_colleection",userSchema);

export default userSchemaModel;