var service = require("../services/MailingService")
var jwt = require('jwt-simple');
var confJWT = require('../config/config.json').jwt;

module.exports.update_mailing_details = function(req ,res){
    var userdetails = req.body;
    console.log("------------> user details------------------> ", userdetails);
    service.update_mailing_details(userdetails , function(userdata){
        if(userdata){
            res.status(201);
            res.json(userdata);
        }
        else{
            res.status(400);            
        }
    })
}

module.exports.findbyuserid = function(req,res){
    var userid =req.params.id;
    service.findbyuserid(userid,function(value){
        res.status(200);
        res.json(value);
    })
}