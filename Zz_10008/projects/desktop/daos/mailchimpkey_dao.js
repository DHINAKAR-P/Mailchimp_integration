var key_model = require('../models/MailchimpKey');

module.exports.create_key = function(mailchimp , callback){
    var mailchimp_value = new key_model(mailchimp);
    mailchimp_value.save(function(err,value){
        if(err){
            callback(err);
        }
        else{
            callback(value);
        }
    })
}
module.exports.update_key = function(mailchimp , callback){
    key_model.findByIdAndUpdate({_id : mailchimp.id},{
        $set:mailchimp
    },{upsert:true , new :true} , function(err , value){
        if(err){
            callback(err);
        }
        else{
            callback(value);
        }
    })
}

module.exports.delete_key = function(mailchimp_id , callback){
    key_model.findByIdAndRemove(mailchimp_id , function(err, value){
        if(err){
            callback(err);
        }
        else{
            callback(value);
        }
    })
}

module.exports.findbyuserid = function(mailchimp_userid , callback){
key_model.find({userid : mailchimp_userid} , function(err , value){
    if(err){
        callback(err);
    }
    else{
        callback(value);
    }
})
}

module.exports.findallmailchimp = function(callback){
    key_model.find(function(err , value){
        if(err){
            callback(err)
        }
        else{
            callback(value)
        }
    })
}
