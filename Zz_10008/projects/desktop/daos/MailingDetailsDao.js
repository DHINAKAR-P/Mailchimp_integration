var Mail_schema = require('../models/mailing_details');

module.exports.update_mailing_details = function(userdetails , callback){
    console.log("------------> user details------------------> ", userdetails);
  var Mail_data = new Mail_schema(userdetails);
  Mail_data.save(function(err,value){
    if(err){
        callback(err);
    }
    else{
        callback(value);
    }
})
}

module.exports.findbyuserid = function(mailchimp_userid , callback){
    Mail_schema.find({userid : mailchimp_userid} , function(err , value){
      if(err){
          callback(err);
      }
      else{
          callback(value);
      }
  })
  }