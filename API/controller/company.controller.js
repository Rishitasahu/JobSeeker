import express from 'express';
import '../model/connection.js'; 
import companySchemaModel from '../model/company.model.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import sendMailAPI from './email.controller.js';

//to save user information 
export var save = async (req,res,next)=>{
    var companylist = await companySchemaModel.find();
    var l= companylist.length;
    if(l==0)
        _id=1;
    else{
        var lastelement = companylist[l-1];
        var _id = lastelement._id+1;
    }
    var companyDetails = req.body;
    companyDetails = {...companyDetails, "_id":_id, "status":0, "role":"company", "info":Date()}; 

    try
    {
        var result=await companySchemaModel.create(companyDetails);
        sendMailAPI(companyDetails.email,companyDetails.password);
        res.status(201).json({"Response" : "sucess", companyDetails});
    }
    catch(err){
        console.log(err);
        res.status(500).json({"Response" : "Error"});
    }
};
 
//to login user 

export var login = async (req,res,next)=>{
    var userDetails = req.body;
    var userDetails={...userDetails,"status" : 1};
    var userList = await companySchemaModel.find(userDetails);
    if(userList.length != 0)
    {
        var payload = {"subject":userList[0].email};
        var key = rs.generate();
        var token = jwt.sign(payload,key);
        res.status(201).json({"token" :token,"userDetail":userList[0]});
    }
    else
        res.status(500).json("not fetched");
};

//to fetch api 

export var fetch = async (req,res,next)=>{
    var userDetails = url.parse(req.url,true).query;
    console.log(userDetails);
    var userList = await companySchemaModel.find(userDetails);
    var l = userList.length;
    if(l != 0){
        res.status(201).json(userList);
    }
    else
        res.status(500).json({"response " : "user Deatials are not found"});
};

//to update api

export var updateUser=async(req,res,next)=>{
    let userDetails = await companySchemaModel.findOne(req.body.condition_obj);
    if(userDetails){
       let user=await companySchemaModel.updateOne(req.body.condition_obj,{$set: req.body.content_obj});
       console.log(user)   
       if(user)
        res.status(201).json({"msg":"success"});
       else
        res.status(500).json({error: "Server Error"});
    }
    else
     res.status(404).json({error: "Requested resource not available"});
  }

//to delete data 

export var del = async (req,res,next)=>{
    var condition_obj= (req.body);
    var userDetails = await companySchemaModel.find(condition_obj);
    if(userDetails.length)
    {
        await companySchemaModel.deleteMany(condition_obj);
        res.status(200).json({"Respone " : "Deleted"});
    }
    else
        res.status(500).json({"respone" : "not deleted"});
}