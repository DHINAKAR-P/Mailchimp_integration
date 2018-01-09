var key_services = require('../services/mailchimpkey_service');

module.exports.create_key = function(req,res){
    var mailchimp = req.body;
    key_services.create_key(mailchimp,function(value){
        res.status(200);
        res.json(value);
    })
}

module.exports.update_key =function(req,res){
    var mailchimp = req.body;
    key_services.update_key(mailchimp,function(value){
        res.status(200);
        res.json(value);
    })
}

module.exports.delete_key = function(req,res){
    var mailchimp_id = req.params.id;
    key_services.delete_key(mailchimp_id,function(value){
        res.status(200);
        res.json(value);
    })
}

module.exports.findbyuserid = function(req,res){
    var userid =req.params.id;
    key_services.findbyuserid(userid,function(value){
        res.status(200);
        res.json(value);
    })
}

module.exports.findallmailchimp = function(req,res){
    key_services.findallmailchimp(function(value){
        res.status(200);
        res.json(value);
    })
}