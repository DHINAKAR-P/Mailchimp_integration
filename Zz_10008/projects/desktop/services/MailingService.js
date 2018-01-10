var dao = require("../daos/MailingDetailsDao");

module.exports.update_mailing_details = function(userdetails , callback){
  console.log("------------> user details------------------> ", userdetails);
  dao.update_mailing_details(userdetails , function(userdata){
    callback(userdata);
  })
}

module.exports.findbyuserid = function(mailchimp_userid , callback){
    dao.findbyuserid(mailchimp_userid,function(value){
        var id = value._id;
        value.id = id;
        callback(value);
    })
}
