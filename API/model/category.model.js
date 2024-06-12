import mongoose from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";

var CategorySchema = mongoose.Schema({
    _id : Number,
    catname : {
        type : String,
        required : [true, "Category name is required"],
        unique : true,
        trim : true
    },
    caticonname :{
        type : String,
        required : [true, "category icon name is required"],
        trim : true
    }
});

CategorySchema.plugin(uniqueValidator);
const CategorySchemaModel=mongoose.model("categoryCollection",CategorySchema);
export default CategorySchemaModel;