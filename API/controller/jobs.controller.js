import express from 'express';
import '../model/connection.js'; 
import jobSchemaModel from '../model/jobs.model.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';

//to save user information 
export var save = async (req,res,next)=>{
    var joblist = await jobSchemaModel.find();
    var l= joblist.length;
    console.log(joblist);
    if(l==0)
        _id=1;
    else{
        var lastelement = joblist[l-1];
        var _id = lastelement._id+1;
    }
    var jobDetails = req.body;
    jobDetails = {...jobDetails, "_id":_id, "info":Date()}; 
    try
    {
        await jobSchemaModel.create(jobDetails);
        res.status(201).json({"Response" : "sucess", jobDetails});
    }
    catch(err){
        res.status(500).json({"Response" : "Error"});
    }
};

//to login user 

export var login = async (req,res,next)=>{
    var userDetails = req.body;
    console.log(userDetails);
    var userDetails={...userDetails,"status" : 1};
    var userList = await jobSchemaModel.find(userDetails);
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
    console.log("ok!!");
    var JobDetails = url.parse(req.url,true).query;
    console.log(JobDetails);
    var JobList = await jobSchemaModel.find(JobDetails);
    var l = JobList.length;
    if(l != 0){
        res.status(200).json({"response " : "found",JobList});
    }
    else
        res.status(404).json({"response " : "jobs Deatials are not found"});
};

//to update api

export var updateUser=async(req,res,next)=>{
    let userDetails = await jobSchemaModel.findOne(req.body.condition_obj);
    if(userDetails){
       let user=await jobSchemaModel.updateOne(req.body.condition_obj,{$set: req.body.content_obj});   
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
    var userDetails = await jobSchemaModel.find(condition_obj);
    if(userDetails.length)
    {
        await jobSchemaModel.deleteMany(condition_obj);
        res.status(200).json({"Respone " : "Deleted"});
    }
    else
        res.status(500).json({"respone" : "not deleted"});
}