import express from 'express';
import '../model/connection.js'; 
import userSchemaModel from '../model/user.model.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import sendMailAPI from './email.controller.js';
import sendForgotMailAPI from './forgotEmail.js';


//to save user information 
export var save = async (req,res,next)=>{
    var userlist = await userSchemaModel.find();
    var l= userlist.length;
    var lastelement = userlist[l-1];
    if(l==0)
        _id=1;
    else
        var _id = lastelement._id+1;
    var userDetails = req.body;
    userDetails = {...userDetails, "_id":_id, "status":0, "role":"user", "info":Date()}; 
    try
    {
        await userSchemaModel.create(userDetails);
        sendMailAPI(userDetails.email,userDetails.password);
        res.status(201).json({"Response" : "sucess", userDetails});
    }
    catch(err){
        res.status(500).json({"Response" : "Error"});
    }
};

//to login user 

export var login = async (req,res,next)=>{
    var userDetails = req.body;
    var userDetails={...userDetails,"status" : 1};
    var userList = await userSchemaModel.find(userDetails);
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
    var userList = await userSchemaModel.find(userDetails);
    var l = userList.length;
    if(l != 0){
        res.status(201).json(userList);
    }
    else
        res.status(500).json({"response " : "user Deatials are not found"});
};

//to update api

export var updateUser=async(req,res,next)=>{
    let userDetails = await userSchemaModel.findOne(req.body.condition_obj);
    if(userDetails){
       let user=await userSchemaModel.updateOne(req.body.condition_obj,{$set: req.body.content_obj});   
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
    var userDetails = await userSchemaModel.find(condition_obj);
    if(userDetails.length)
    {
        await userSchemaModel.deleteMany(condition_obj);
        res.status(200).json({"Respone " : "Deleted"});
    }
    else
        res.status(500).json({"respone" : "not deleted"});
}