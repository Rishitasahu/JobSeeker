 import express from 'express';
import '../model/connection.js';
import subCategorySchemaModel from '../model/subcategory.model.js';
import url from 'url';
import rs from 'randomstring';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to save 
export var save = async (req,res,next)=>{
    /*console.log(req.body);
    console.log(req.files);*/
    var ScatDetails = req.body;
    var ScatList = await subCategorySchemaModel.find();
    var l = ScatList.length;
    var _id1;
    if(l==0)
        _id1=1;
    else
        _id1 = ScatList[l-1]._id+1;

    var subCaticon = req.files.subCaticonName;

    var subCaticonnm = rs.generate()+"-"+Date.now()+"-"+subCaticon.name;

    var uploadpath = path.join(__dirname,'../../UI/public/asset/uploads/subCaticons',subCaticonnm);

    ScatDetails = {...ScatDetails, "_id":_id1,"subCaticonName":subCaticonnm};
    try
    {
        await subCategorySchemaModel.create(ScatDetails);
        subCaticon.mv(uploadpath);
        res.status(201).json({"respone" : "sucess"});
    }
    catch(err)
    {
        res.status(500).json({"respone":"failure"});
    }
};

// to fetch data
export var fetch = async (req,res,next)=>{
    var ScategoryDetails = url.parse(req.url,true).query;
    //console.log(ScategoryDetails);
    var ScategoryList =await subCategorySchemaModel.find(ScategoryDetails);
    if(ScategoryList.length)
        res.status(200).json({"Response": "find",ScategoryList});
    else
        res.status(404).json({"Response" : "not find"});
}; 
// to update data
export var update = async (req,res,next)=>{
    var condition_obj=JSON.parse(req.body.condition);
    var ScategoryDetails = await subCategorySchemaModel.find(condition_obj);
    if(ScategoryDetails.length)
    {
        await subCategorySchemaModel.update(condition_obj,{$set:JSON.parse(req.body.content)});
        res.status(201).json({"Response" : "updated"});
    }
    else
        res.status(404).json({"Response" : "data not found"});
};

//to delete data 

export var del = async (req,res,next)=>{
    var condition_obj = JSON.parse(req.body.condition);
    var ScatDetails = await subCategorySchemaModel.find(condition_obj);
    if(ScatDetails.length)
    {
        try
        {
            await subCategorySchemaModel.deleteMany(condition_obj);
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