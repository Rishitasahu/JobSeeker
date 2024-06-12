import mongoose from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";

var SubCategorySchema = mongoose.Schema({
    _id : Number,
    catname : {
        type : String,
        required : [true, "Category name is required"],
        trim : true
    },
    subCatname : {
        type : String,
        required : [true, "Category name is required"],
        unique : true,
        lowercase : true,
        trim : true
    },
    subCaticonName :{
        type : String,
        required : [true, "category icon name is required"],
        trim : true
    }
});

SubCategorySchema.plugin(uniqueValidator);
const CategorySchemaModel=mongoose.model("SubCategoryCollection",SubCategorySchema);
export default CategorySchemaModel;