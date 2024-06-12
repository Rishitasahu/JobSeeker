import express from 'express';
import '../model/connection.js';
import CategorySchemaModel from '../model/category.model.js';
import url from 'url';
import rs from 'randomstring';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to save 
export var save = async (req,res,next)=>{
    console.log(req.body);
    console.log(req.files);
    var caticon = req.files.caticonname;
    //the caticonname which is come in req.files is stored in the instance caticon

    var caticonname = rs.generate()+"-"+Date.now()+"-"+caticon.name;
    //The caticonname contain the name of file which come with request

    var uploadpath = path.join(__dirname,'../../UI/public/asset/uploads/caticons',caticonname);
    //it upload img to caticon folder in UI

    var catList = await CategorySchemaModel.find();
    console.log(catList);
    var l = catList.length;
    var _id1;
    if(l==0)
        _id1=1;
    else{
        var lastelement = catList[l-1];
        _id1 = lastelement._id+1;
    }
    var catDetails=req.body;
    catDetails = {...catDetails, "_id":_id1 , "caticonname" : caticonname};
    try
    {
        await CategorySchemaModel.create(catDetails);
        caticon.mv(uploadpath);
        res.status(201).json({"respone" : "sucess"});
    }
    catch(err)
    {
        res.status(500).json({"respone":"failure"});
    }
};

// to fetch data
export var fetch = async (req,res,next)=>{
    var categoryDetails = url.parse(req.url,true).query;
    var categoryList =await CategorySchemaModel.find(categoryDetails);
    if(categoryList.length)
        res.status(200).json({"Response": "find",categoryList});
    else
        res.status(404).json({"Response" : "not find"});
}; 
// to update data
export var update = async (req,res,next)=>{
    var condition_obj=JSON.parse(req.body.condition);
    var categoryDetails = await CategorySchemaModel.find(condition_obj);
    if(categoryDetails.length)
    {
        await CategorySchemaModel.update(condition_obj,{$set:JSON.parse(req.body.content)});
        res.status(201).json({"Response" : "updated"});
    }
    else
        res.status(404).json({"Response" : "data not found"});
};

//to delete data 

export var del = async (req,res,next)=>{
    var condition_obj = JSON.parse(req.body.condition);
    var catDetails = await CategorySchemaModel.find(condition_obj);
    if(catDetails.length)
    {
        try
        {
            await CategorySchemaModel.deleteMany(condition_obj);
            res.status(201).json({"Response" :"Deleted"});
        }
        catch(err)
        {
            res.status(500).json({"Response":"something went wrong"});
        }
    }
    else
        res.status(404).json({"Response" : "Data Not Found"});
};